import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
import { typeDefs } from './schemas/typeDefs.js';
import { resolvers } from './resolvers/index.js';

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

// This is the Vercel serverless function handler
export default startStandaloneServer(server, {
    context: async ({ req }) => {
        // You can add context here if needed, e.g., for authentication
    },
    // Vercel handles the listening part, so we don't specify a port
});
