import { ApolloServer } from '@apollo/server';
import { expressMiddleware } from '@apollo/server/express4';
import express from 'express';
import cors from 'cors';

import { typeDefs } from './schemas/typeDefs.js';
import { resolvers } from './resolvers/index.js';

const app = express();

app.use(cors({
  origin: true,
  credentials: true,
}));
app.use(express.json());

const server = new ApolloServer({ typeDefs, resolvers });

// Top-level await — module fully resolves before any request is handled
await server.start();

// Mount at root: Vercel already scopes this handler to /api/graphql
app.use(expressMiddleware(server));

export default app;