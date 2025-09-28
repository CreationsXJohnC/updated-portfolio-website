import { ApolloServer } from '@apollo/server';
import { expressMiddleware } from '@as-integrations/express4';
import express from 'express';
import cors from 'cors';
import { typeDefs } from '../integrated-portfolio/server/schemas/typeDefs.js';
import { resolvers } from '../integrated-portfolio/server/resolvers/index.js';
import { testConnection, initializeModels } from '../integrated-portfolio/server/models/index.js';

// Initialize database once
let dbInitialized = false;
let dbConnected = false;

async function initializeDatabase() {
  if (!dbInitialized) {
    try {
      dbConnected = await testConnection();
      if (dbConnected) {
        await initializeModels();
      }
      dbInitialized = true;
    } catch (error) {
      console.warn('Database initialization failed, using mock data:', error.message);
      dbConnected = false;
      dbInitialized = true;
    }
  }
}

const server = new ApolloServer({
  typeDefs,
  resolvers,
  introspection: process.env.GRAPHQL_INTROSPECTION === 'true' || process.env.NODE_ENV !== 'production',
  csrfPrevention: true,
  cache: 'bounded'
});

let app;
let serverStarted = false;

async function createApp() {
  if (!app) {
    app = express();
    
    await server.start();
    serverStarted = true;
    
    // Configure CORS
    const corsOptions = {
      origin: process.env.NODE_ENV === 'production' 
        ? [process.env.CORS_ORIGIN || 'https://updated-portfolio-website-omega.vercel.app'] 
        : ['http://localhost:3000', 'http://localhost:5173'],
      credentials: true,
      methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
      allowedHeaders: ['Content-Type', 'Authorization']
    };

    app.use(
      '/api/graphql',
      cors(corsOptions),
      express.json({ limit: '50mb' }),
      expressMiddleware(server, {
        context: async ({ req, res }) => {
          await initializeDatabase();
          return {
            req,
            res,
            dbConnected,
          };
        },
      })
    );
  }
  return app;
}

export default async function handler(req, res) {
  try {
    const app = await createApp();
    
    // Handle the request
    app(req, res);
  } catch (error) {
    console.error('GraphQL API Error:', error);
    res.status(500).json({ 
      error: 'Internal server error', 
      message: error.message 
    });
  }
}

// Force deployment update - 2025-09-28