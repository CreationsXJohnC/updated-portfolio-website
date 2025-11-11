import express from 'express';
import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';
import { createRequire } from 'module';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const require = createRequire(import.meta.url);

// Load YouTube-related env vars from .env.production for local testing
function loadEnvFromFile(filePath) {
  try {
    if (!fs.existsSync(filePath)) return;
    const content = fs.readFileSync(filePath, 'utf8');
    content.split(/\r?\n/).forEach((line) => {
      const trimmed = line.trim();
      if (!trimmed || trimmed.startsWith('#')) return;
      const eq = trimmed.indexOf('=');
      if (eq === -1) return;
      const key = trimmed.slice(0, eq).trim();
      const value = trimmed.slice(eq + 1).trim();
      if (!(key in process.env)) {
        process.env[key] = value;
      }
    });
  } catch (err) {
    console.warn('Failed to load env from file:', filePath, err.message);
  }
}
loadEnvFromFile(path.join(__dirname, '.env.production'));

// Load serverless function handlers so the production test server can proxy them locally
const graphqlHandler = require(path.join(__dirname, 'api', 'graphql.js'));
const healthHandler = require(path.join(__dirname, 'api', 'health.js'));
const contactHandler = require(path.join(__dirname, 'api', 'contact.js'));

const app = express();
const PORT = 3000;

// Serve static files from client/dist
app.use(express.static(path.join(__dirname, 'client/dist')));

// Attach API routes to simulate Vercel serverless functions locally
app.all('/api/graphql', (req, res) => graphqlHandler(req, res));
app.all('/api/health', (req, res) => healthHandler(req, res));
app.all('/api/contact', (req, res) => contactHandler(req, res));

// --- Minimal YouTube endpoints to support VideosView locally ---
const YT_API_KEY = process.env.YOUTUBE_API_KEY || '';
const YT_HANDLE = process.env.YOUTUBE_CHANNEL_HANDLE || '@Creations_X';
const YT_CHANNEL_ID = process.env.YOUTUBE_CHANNEL_ID || '';
const YT_STRICT = ((process.env.YOUTUBE_STRICT_RESOLUTION ?? 'true').toLowerCase() === 'true');

const ytCache = new Map();
function getCache(key) { return ytCache.get(key); }
function setCache(key, value, ttlMs = 1000 * 60 * 10) {
  ytCache.set(key, value);
  setTimeout(() => ytCache.delete(key), ttlMs).unref?.();
}

async function resolveChannelIdFromHandle(handle) {
  const normalizedInput = (handle || '').trim();
  const normalized = normalizedInput.startsWith('@') ? normalizedInput : `@${normalizedInput}`;
  const cacheKey = `channelId:${normalized}`;

  if (YT_CHANNEL_ID) {
    setCache(cacheKey, YT_CHANNEL_ID);
    return YT_CHANNEL_ID;
  }

  const cached = getCache(cacheKey);
  if (cached) return cached;

  try {
    const pageUrl = `https://www.youtube.com/${normalized}`;
    const resp = await fetch(pageUrl, { headers: { 'User-Agent': 'Mozilla/5.0' } });
    const html = await resp.text();
    const canonicalMatch = html.match(/<link[^>]*rel=["']canonical["'][^>]*href=["']https:\/\/www\.youtube\.com\/channel\/(UC[0-9A-Za-z_-]{22})["'][^>]*>/i);
    if (canonicalMatch && canonicalMatch[1]) {
      setCache(cacheKey, canonicalMatch[1]);
      return canonicalMatch[1];
    }
    const metaMatch = html.match(/itemprop=["']channelId["'][^>]*content=["'](UC[0-9A-Za-z_-]{22})["']/i);
    if (metaMatch && metaMatch[1]) {
      setCache(cacheKey, metaMatch[1]);
      return metaMatch[1];
    }
    const looseMatch = html.match(/"channelId":"(UC[0-9A-Za-z_-]{22})"/);
    if (looseMatch && looseMatch[1]) {
      setCache(cacheKey, looseMatch[1]);
      return looseMatch[1];
    }
  } catch (err) {
    console.error('YouTube handle scrape error:', err);
  }

  if (YT_API_KEY && !YT_STRICT) {
    try {
      const searchUrl = new URL('https://www.googleapis.com/youtube/v3/search');
      searchUrl.searchParams.set('part', 'snippet');
      searchUrl.searchParams.set('type', 'channel');
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
  if (!channelId || !channelId.startsWith('UC')) return null;
  return 'UU' + channelId.slice(2);
}
function thumbnailForVideoId(videoId) {
  return `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;
}

app.get('/api/youtube/channel', async (req, res) => {
  try {
    const handle = req.query.handle || YT_HANDLE;
    const channelId = await resolveChannelIdFromHandle(handle);
    if (!channelId) return res.status(404).json({ error: 'Channel not found', handle });
    const uploadsPlaylistId = uploadsPlaylistIdFromChannelId(channelId);
    res.json({ handle, channelId, uploadsPlaylistId });
  } catch (err) {
    console.error('Error in /api/youtube/channel:', err);
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.get('/api/youtube/uploads', async (req, res) => {
  try {
    const handle = req.query.handle || YT_HANDLE;
    const channelId = await resolveChannelIdFromHandle(handle);
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
    console.error('Error in /api/youtube/uploads:', err);
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.get('/api/youtube/playlists', async (req, res) => {
  try {
    const handle = req.query.handle || YT_HANDLE;
    const channelId = await resolveChannelIdFromHandle(handle);
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
    console.error('Error in /api/youtube/playlists:', err);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Handle client-side routing - serve index.html for all non-API routes
// Use a catch-all middleware to avoid path-to-regexp issues
app.use((req, res) => {
  res.sendFile(path.join(__dirname, 'client/dist/index.html'));
});

app.listen(PORT, () => {
  console.log(`🚀 Production build test server running at http://localhost:${PORT}`);
  console.log('📝 This simulates how your static files will be served on Vercel');
  console.log('⚠️  Note: This only tests the frontend. Backend will be serverless on Vercel.');
});