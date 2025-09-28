import { ApolloServer } from 'apollo-server-micro';
import { typeDefs } from '../integrated-portfolio/server/schemas/typeDefs.js';
import { resolvers } from '../integrated-portfolio/server/resolvers/index.js';
import { sequelize, testConnection, initializeModels } from '../integrated-portfolio/server/models/index.js';

const server = new ApolloServer({
  typeDefs,
  resolvers,
  introspection: process.env.NODE_ENV !== 'production',
  playground: process.env.NODE_ENV !== 'production',
  csrfPrevention: true,
  cache: 'bounded',
  context: ({ req }) => {
    return {
      req,
      dbConnected,
    };
  },
});

const startServer = server.start();

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

export default async function handler(req, res) {
  // Enable CORS
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.setHeader('Access-Control-Allow-Origin', process.env.CORS_ORIGIN || '*');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');

  if (req.method === 'OPTIONS') {
    res.end();
    return false;
  }

  try {
    // Initialize database and start server
    await initializeDatabase();
    await startServer;
    await server.createHandler({ path: '/api/graphql' })(req, res);
  } catch (error) {
    console.error('GraphQL API Error:', error);
    res.status(500).json({ error: 'Internal server error', message: error.message });
  }
}

export const config = {
  api: {
    bodyParser: false,
  },
};