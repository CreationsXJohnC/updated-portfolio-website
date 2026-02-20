import { ApolloServer } from '@apollo/server';
import { expressMiddleware } from '@as-integrations/express4';
import { ApolloServerPluginDrainHttpServer } from '@apollo/server/plugin/drainHttpServer';
import { ApolloServerPluginCacheControl } from '@apollo/server/plugin/cacheControl';
import express from 'express';
import http from 'http';
import cors from 'cors';
import compression from 'compression';
import helmet from 'helmet';
import rateLimit from 'express-rate-limit';
import dotenv from 'dotenv';
import crypto from 'crypto';
import { typeDefs } from './schemas/typeDefs.js';
import { resolvers } from './resolvers/index.js';
import { sequelize, testConnection } from './config/database.js';
import { Project } from './models/index.js';
import { mockProjects } from './data/mockData.js';
import './models/index.js';

// Load environment variables
dotenv.config();

const PORT = process.env.PORT || 4000;
const FRONTEND_URL = process.env.FRONTEND_URL || 'http://localhost:5173';
const CORS_ORIGIN = process.env.CORS_ORIGIN || FRONTEND_URL;

async function startServer() {
  // Allow forcing mock-data mode via env (bypass DB)
  const USE_MOCK = process.env.USE_MOCK_DATA === 'true';

    // Create tables if they don't exist
  await sequelize.sync();

    // Create tables and test connection
  await sequelize.sync(); 

  await testConnection();

  // Seed database with mock data if empty
  await seedDatabase();


  // Create Express app
  const app = express();
  const httpServer = http.createServer(app);

  // Security middleware
  app.use(helmet({
    contentSecurityPolicy: process.env.NODE_ENV === 'production',
    crossOriginEmbedderPolicy: false
  }));

  // Compression middleware
  app.use(compression({
    filter: (req, res) => {
      if (req.headers['x-no-compression']) {
        return false;
      }
      return compression.filter(req, res);
    },
    level: 6,
    threshold: 1024
  }));

  // Rate limiting
  const limiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: process.env.NODE_ENV === 'production' ? 100 : 1000, // limit each IP
    message: {
      error: 'Too many requests from this IP, please try again later.',
      retryAfter: '15 minutes'
    },
    standardHeaders: true,
    legacyHeaders: false,
  });

  app.use('/graphql', limiter);

  // Create Apollo Server
  const server = new ApolloServer({
    typeDefs,
    resolvers,
    plugins: [
      ApolloServerPluginDrainHttpServer({ httpServer }),
      ApolloServerPluginCacheControl({
        defaultMaxAge: 300, // 5 minutes default cache
        calculateHttpHeaders: false
      })
    ],
    introspection: process.env.GRAPHQL_INTROSPECTION === 'true' || process.env.NODE_ENV !== 'production',
    csrfPrevention: true,
    cache: 'bounded'
  });

  // Start Apollo Server
  await server.start();

  // Configure CORS
  const corsOptions = {
    origin: process.env.NODE_ENV === 'production' 
      ? [CORS_ORIGIN] 
      : [FRONTEND_URL, 'http://localhost:3000', 'http://localhost:5173', 'http://localhost:5174', 'http://localhost:4173'],
    credentials: true,
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization']
  };

  // Apply middleware
  // Enable CORS for REST endpoints
  app.use('/youtube', cors(corsOptions));
  app.use('/health', cors(corsOptions));
  app.use('/', cors(corsOptions));

  // GraphQL middleware
  app.use(
    '/graphql',
    cors(corsOptions),
    express.json({ limit: '50mb' }),
    expressMiddleware(server, {
      context: async ({ req, res }) => {
        return {
          req,
          res,
          dbConnected: await testConnection(),
          // Add authentication context here if needed
        };
      },
    })
  );

  // Health check endpoint
  app.get('/health', (req, res) => {
    res.status(200).json({
      status: 'OK',
      message: 'Portfolio API is running',
      timestamp: new Date().toISOString(),
      environment: process.env.NODE_ENV || 'development'
    });
  });

  // -----------------------------
  // YouTube Integration Endpoints
  // -----------------------------
  const YT_API_KEY = process.env.YOUTUBE_API_KEY || '';
  const YT_HANDLE = process.env.YOUTUBE_CHANNEL_HANDLE || '@Creations_X';
  const YT_CHANNEL_ID = process.env.YOUTUBE_CHANNEL_ID || '';
  const YT_STRICT = ((process.env.YOUTUBE_STRICT_RESOLUTION ?? 'true').toLowerCase() === 'true');

  // Simple in-memory cache
  const ytCache = new Map();
  const setCache = (key, data, ttlMs = 5 * 60 * 1000) => {
    const expiresAt = Date.now() + ttlMs;
    ytCache.set(key, { data, expiresAt });
  };
  const getCache = (key) => {
    const item = ytCache.get(key);
    if (!item) return null;
    if (Date.now() > item.expiresAt) {
      ytCache.delete(key);
      return null;
    }
    return item.data;
  };

  async function resolveChannelIdFromHandle(handle) {
    const normalizedInput = (handle || '').trim();
    const normalized = normalizedInput.startsWith('@') ? normalizedInput : `@${normalizedInput}`;
    const cacheKey = `channelId:${normalized}`;

    // If explicitly provided, use env channel ID (highest confidence)
    if (YT_CHANNEL_ID) {
      console.log('[YouTube] Using explicit channel ID from env', { handle: normalized, channelId: YT_CHANNEL_ID });
      setCache(cacheKey, YT_CHANNEL_ID);
      return YT_CHANNEL_ID;
    }

    // Cache check
    const cached = getCache(cacheKey);
    if (cached) return cached;

    // Prefer scraping the exact handle page to avoid wrong channel matches
    try {
      const pageUrl = `https://www.youtube.com/${normalized}`;
      const resp = await fetch(pageUrl, { headers: { 'User-Agent': 'Mozilla/5.0' } });
      const html = await resp.text();
      // 1) Canonical link to /channel/UC...
      const canonicalMatch = html.match(/<link[^>]*rel=["']canonical["'][^>]*href=["']https:\/\/www\.youtube\.com\/channel\/(UC[0-9A-Za-z_-]{22})["'][^>]*>/i);
      if (canonicalMatch && canonicalMatch[1]) {
        console.log('[YouTube] Resolved channel via canonical link', { handle: normalized, channelId: canonicalMatch[1] });
        setCache(cacheKey, canonicalMatch[1]);
        return canonicalMatch[1];
      }
      // 2) Meta itemprop channelId
      const metaMatch = html.match(/itemprop=["']channelId["'][^>]*content=["'](UC[0-9A-Za-z_-]{22})["']/i);
      if (metaMatch && metaMatch[1]) {
        console.log('[YouTube] Resolved channel via meta tag', { handle: normalized, channelId: metaMatch[1] });
        setCache(cacheKey, metaMatch[1]);
        return metaMatch[1];
      }
      // 3) Fallback: first channelId occurrence (least reliable)
      const looseMatch = html.match(/"channelId":"(UC[0-9A-Za-z_-]{22})"/);
      if (looseMatch && looseMatch[1]) {
        console.log('[YouTube] Resolved channel via loose match', { handle: normalized, channelId: looseMatch[1] });
        setCache(cacheKey, looseMatch[1]);
        return looseMatch[1];
      }
    } catch (err) {
      console.error('YouTube handle scrape error:', err);
    }

    // Fallback: use search API if scraping fails (only when not strict)
    if (YT_API_KEY && !YT_STRICT) {
      try {
        const searchUrl = new URL('https://www.googleapis.com/youtube/v3/search');
        searchUrl.searchParams.set('part', 'snippet');
        searchUrl.searchParams.set('type', 'channel');
        // Use handle without @ for query, but be aware this can be ambiguous
        searchUrl.searchParams.set('q', normalized.replace('@', ''));
        searchUrl.searchParams.set('maxResults', '1');
        searchUrl.searchParams.set('key', YT_API_KEY);
        const resp = await fetch(searchUrl);
        const json = await resp.json();
        const id = json?.items?.[0]?.snippet?.channelId || json?.items?.[0]?.id?.channelId;
        if (id) {
          setCache(cacheKey, id);
          return id;
        }
      } catch (err) {
        console.error('YouTube search error:', err);
      }
    }

    return null;
  }

  function uploadsPlaylistIdFromChannelId(channelId) {
    // Uploads playlist id is channelId with UC -> UU
    if (!channelId || !channelId.startsWith('UC')) return null;
    return 'UU' + channelId.slice(2);
  }

  function thumbnailForVideoId(videoId) {
    return `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;
  }

  app.get('/youtube/channel', async (req, res) => {
    try {
      const handle = req.query.handle || YT_HANDLE;
      const channelId = await resolveChannelIdFromHandle(handle);
      console.log('[YouTube] /channel resolved', { handle, channelId });
      if (!channelId) {
        return res.status(404).json({ error: 'Channel not found', handle });
      }
      const uploadsPlaylistId = uploadsPlaylistIdFromChannelId(channelId);
      res.json({ handle, channelId, uploadsPlaylistId });
    } catch (err) {
      console.error('Error in /youtube/channel:', err);
      res.status(500).json({ error: 'Internal server error' });
    }
  });

  app.get('/youtube/uploads', async (req, res) => {
    try {
      const handle = req.query.handle || YT_HANDLE;
      const channelId = await resolveChannelIdFromHandle(handle);
      console.log('[YouTube] /uploads resolved', { handle, channelId });
      if (!channelId) return res.status(404).json({ error: 'Channel not found', handle });
      const uploadsPlaylistId = uploadsPlaylistIdFromChannelId(channelId);
      const maxResults = Math.min(parseInt(req.query.max || '12', 10), 50);

      const cacheKey = `uploads:${uploadsPlaylistId}:${maxResults}`;
      const cached = getCache(cacheKey);
      if (cached) return res.json(cached);

      if (YT_API_KEY) {
        const url = new URL('https://www.googleapis.com/youtube/v3/playlistItems');
        url.searchParams.set('part', 'snippet,contentDetails');
        url.searchParams.set('playlistId', uploadsPlaylistId);
        url.searchParams.set('maxResults', String(maxResults));
        url.searchParams.set('key', YT_API_KEY);
        const resp = await fetch(url);
        const json = await resp.json();
        const items = (json.items || []).map((it) => {
          const videoId = it.contentDetails?.videoId;
          const sn = it.snippet || {};
          const thumb = sn.thumbnails?.high?.url || sn.thumbnails?.default?.url || (videoId ? thumbnailForVideoId(videoId) : null);
          return {
            id: videoId,
            title: sn.title,
            description: sn.description,
            publishedAt: sn.publishedAt,
            thumbnail: thumb,
            url: videoId ? `https://www.youtube.com/watch?v=${videoId}` : null,
            channelTitle: sn.channelTitle,
          };
        });
        const payload = { uploadsPlaylistId, items };
        setCache(cacheKey, payload);
        return res.json(payload);
      }

      // Fallback without API key: use channel RSS feed
      const rssUrl = `https://www.youtube.com/feeds/videos.xml?channel_id=${channelId}`;
      const resp = await fetch(rssUrl);
      const xml = await resp.text();
      const entries = Array.from(xml.matchAll(/<entry>[\s\S]*?<id>(.*?)<\/id>[\s\S]*?<title>([\s\S]*?)<\/title>[\s\S]*?<published>(.*?)<\/published>/g));
      const items = entries.slice(0, maxResults).map((m) => {
        const idTag = m[1] || '';
        const videoIdMatch = idTag.match(/video:(.*)$/);
        const videoId = videoIdMatch ? videoIdMatch[1] : null;
        const title = m[2] ? m[2].replace(/\n/g, '').trim() : '';
        const publishedAt = m[3] || '';
        return {
          id: videoId,
          title,
          publishedAt,
          thumbnail: videoId ? thumbnailForVideoId(videoId) : null,
          url: videoId ? `https://www.youtube.com/watch?v=${videoId}` : null,
        };
      });
      const payload = { uploadsPlaylistId, items };
      setCache(cacheKey, payload);
      res.json(payload);
    } catch (err) {
      console.error('Error in /youtube/uploads:', err);
      res.status(500).json({ error: 'Internal server error' });
    }
  });

  app.get('/youtube/playlists', async (req, res) => {
    try {
      const handle = req.query.handle || YT_HANDLE;
      const channelId = await resolveChannelIdFromHandle(handle);
      console.log('[YouTube] /playlists resolved', { handle, channelId });
      if (!channelId) return res.status(404).json({ error: 'Channel not found', handle });
      const maxResults = Math.min(parseInt(req.query.max || '12', 10), 50);

      const cacheKey = `playlists:${channelId}:${maxResults}`;
      const cached = getCache(cacheKey);
      if (cached) return res.json(cached);

      if (!YT_API_KEY) {
        return res.status(200).json({ items: [], note: 'Set YOUTUBE_API_KEY to enable playlists.' });
      }

      const url = new URL('https://www.googleapis.com/youtube/v3/playlists');
      url.searchParams.set('part', 'snippet,contentDetails');
      url.searchParams.set('channelId', channelId);
      url.searchParams.set('maxResults', String(maxResults));
      url.searchParams.set('key', YT_API_KEY);
      const resp = await fetch(url);
      const json = await resp.json();
      const items = (json.items || []).map((it) => {
        const sn = it.snippet || {};
        const thumb = sn.thumbnails?.high?.url || sn.thumbnails?.default?.url || null;
        return {
          id: it.id,
          title: sn.title,
          description: sn.description,
          itemCount: it.contentDetails?.itemCount || 0,
          thumbnail: thumb,
          url: it.id ? `https://www.youtube.com/playlist?list=${it.id}` : null,
        };
      });
      const payload = { items };
      setCache(cacheKey, payload);
      res.json(payload);
    } catch (err) {
      console.error('Error in /youtube/playlists:', err);
      res.status(500).json({ error: 'Internal server error' });
    }
  });

  // Root endpoint
  app.get('/', (req, res) => {
    res.json({
      message: 'Portfolio GraphQL API',
      graphql: '/graphql',
      youtube: {
        channel: '/youtube/channel?handle=@Creations_X',
        uploads: '/youtube/uploads?handle=@Creations_X',
        playlists: '/youtube/playlists?handle=@Creations_X'
      },
      health: '/health'
    });
  });

  // Start HTTP server
  await new Promise((resolve) => httpServer.listen({ port: PORT }, resolve));
  
  console.log(`🚀 Server ready at http://localhost:${PORT}/`);
  console.log(`📊 GraphQL endpoint: http://localhost:${PORT}/graphql`);
  console.log(`🏥 Health check: http://localhost:${PORT}/health`);
  console.log(`🌍 Environment: ${process.env.NODE_ENV || 'development'}`);
}

async function seedDatabase() {
  try {
    const projectCount = await Project.count();
    if (projectCount === 0) {
      console.log('No projects found in database, seeding with mock data...');
      await Project.bulkCreate(mockProjects);
      console.log('Database seeded successfully with mock projects.');
    }
  } catch (error) {
    console.error('Error seeding database:', error);
  }
}

// Handle graceful shutdown
process.on('SIGTERM', () => {
  console.log('SIGTERM received, shutting down gracefully');
  process.exit(0);
});

process.on('SIGINT', () => {
  console.log('SIGINT received, shutting down gracefully');
  process.exit(0);
});

// Start the server
startServer().catch((error) => {
  console.error('❌ Error starting server:', error);
  process.exit(1);
});