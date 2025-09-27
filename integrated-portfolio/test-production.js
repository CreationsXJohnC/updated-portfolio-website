import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = 3000;

// Serve static files from client/dist
app.use(express.static(path.join(__dirname, 'client/dist')));

// Handle client-side routing - serve index.html for all non-API routes
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'client/dist/index.html'));
});

app.listen(PORT, () => {
  console.log(`🚀 Production build test server running at http://localhost:${PORT}`);
  console.log('📝 This simulates how your static files will be served on Vercel');
  console.log('⚠️  Note: This only tests the frontend. Backend will be serverless on Vercel.');
});