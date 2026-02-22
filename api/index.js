import { ApolloServer } from '@apollo/server';
import { expressMiddleware } from '@apollo/server/express4';
import express from 'express';
import http from 'http';
import cors from 'cors';
import dotenv from 'dotenv';

import { typeDefs } from './schemas/typeDefs.js';
import { resolvers } from './resolvers/index.js';
import youtubeRouter from './youtube.js';

if (process.env.NODE_ENV !== 'production') {
  dotenv.config({ path: '../.env' });
}

const app = express();
const httpServer = http.createServer(app);

// Global Middleware: Applied to ALL incoming requests
app.use(cors());
app.use(express.json());

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

await server.start();

// Route handlers
app.use('/graphql', expressMiddleware(server));
app.use('/api/youtube', youtubeRouter);

if (process.env.NODE_ENV !== 'production') {
  httpServer.listen({ port: 4000 }, () => {
    console.log(`🚀 API server ready at http://localhost:4000`);
  });
}

export default app;
