import { ApolloServer } from 'apollo-server-micro';
import { typeDefs } from '../integrated-portfolio/server/schemas/index.js';
import { resolvers } from '../integrated-portfolio/server/resolvers/index.js';
import { sequelize } from '../integrated-portfolio/server/config/database.js';
import '../integrated-portfolio/server/models/index.js';

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
    };
  },
});

const startServer = server.start();

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

  // Test database connection
  try {
    await sequelize.authenticate();
    console.log('Database connection established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }

  await startServer;
  await server.createHandler({ path: '/api/graphql' })(req, res);
}

export const config = {
  api: {
    bodyParser: false,
  },
};