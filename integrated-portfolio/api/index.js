import { ApolloServer } from '@apollo/server';
import { expressMiddleware } from '@as-integrations/express4';
import { ApolloServerPluginDrainHttpServer } from '@apollo/server/plugin/drainHttpServer';
import { ApolloServerPluginCacheControl } from '@apollo/server/plugin/cacheControl';
import 'pg';
import express from 'express';
import http from 'http';
import cors from 'cors';
import compression from 'compression';
import helmet from 'helmet';
import rateLimit from 'express-rate-limit';
import dotenv from 'dotenv';
import path from 'path';
import { typeDefs } from './schemas/typeDefs.js';
import { resolvers } from './resolvers/index.js';
import { sequelize, testConnection } from './config/database.js';
import { Project } from './models/index.js';
import { mockProjects } from './data/mockData.js';
import './models/index.js';
import { fileURLToPath } from 'url';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const ALLOWED_ORIGINS = (process.env.ALLOWED_ORIGINS || 'http://localhost:5173').split(',');

const app = express();
const httpServer = http.createServer(app);

// Middleware setup
app.use(helmet({ contentSecurityPolicy: false, crossOriginEmbedderPolicy: false }));
app.use(compression());
const limiter = rateLimit({ windowMs: 15 * 60 * 1000, max: 1000, standardHeaders: true, legacyHeaders: false });
app.use('/api/graphql', limiter);

const corsOptions = {
    origin: (origin, callback) => {
        if (!origin || ALLOWED_ORIGINS.includes(origin)) {
            callback(null, true);
        } else {
            callback(new Error('Not allowed by CORS'));
        }
    },
    credentials: true,
};
app.use(cors(corsOptions));

// Apollo Server setup
const server = new ApolloServer({
    typeDefs,
    resolvers,
    plugins: [
        ApolloServerPluginDrainHttpServer({ httpServer }),
        ApolloServerPluginCacheControl({ defaultMaxAge: 300 }),
    ],
    introspection: true, // Enabled for simplicity
});

// We must await server.start() before calling expressMiddleware
server.start().then(() => {
    app.use(
        '/api/graphql',
        express.json({ limit: '50mb' }),
        expressMiddleware(server, {
            context: async ({ req, res }) => ({
                req,
                res,
                dbConnected: await testConnection(),
            }),
        })
    );
});

// Other routes
app.get('/api/health', (req, res) => {
    res.status(200).json({ status: 'OK' });
});

// DB Initialization
sequelize.sync({ force: false }).then(() => {
    console.log('Database initialized successfully.');
    seedDatabase();
}).catch(err => {
    console.error('Could not initialize database:', err);
});

async function seedDatabase() {
    try {
        const projectCount = await Project.count();
        if (projectCount === 0) {
            console.log('Seeding database with mock projects...');
            await Project.bulkCreate(mockProjects);
            console.log('Database seeded successfully.');
        }
    } catch (error) {
        console.error('Error seeding database:', error);
    }
}

export default app;
