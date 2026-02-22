import express from 'express';
import axios from 'axios';

const app = express();

const YOUTUBE_API_KEY = process.env.YOUTUBE_API_KEY;
const YOUTUBE_API_URL = 'https://www.googleapis.com/youtube/v3';

async function getChannelIdByHandle(handle) {
  try {
    const response = await axios.get(`${YOUTUBE_API_URL}/channels`, {
      params: {
        part: 'id',
        forHandle: handle,
        key: YOUTUBE_API_KEY,
      },
    });
    return response.data.items[0].id;
  } catch (error) { 
    console.error('Error fetching channel ID:', error.response ? error.response.data : error.message);
    throw new Error('Could not fetch channel ID from YouTube API.');
  }
}

app.get('/api/youtube/uploads', async (req, res) => {
  if (!YOUTUBE_API_KEY) {
    return res.status(500).json({ error: 'YouTube API key is not configured.' });
  }

  const { handle, max = 12 } = req.query;
  if (!handle) {
    return res.status(400).json({ error: 'YouTube handle is required.' });
  }

  try {
    const channelId = await getChannelIdByHandle(handle);
    const response = await axios.get(`${YOUTUBE_API_URL}/search`, {
      params: {
        part: 'snippet',
        channelId: channelId,
        order: 'date',
        type: 'video',
        maxResults: max,
        key: YOUTUBE_API_KEY,
      },
    });

    const items = response.data.items.map(item => ({
      id: item.id.videoId,
      title: item.snippet.title,
      url: `https://www.youtube.com/watch?v=${item.id.videoId}`,
      thumbnail: item.snippet.thumbnails.high.url,
    }));

    res.json({ items });
  } catch (error) {
    console.error('Error fetching YouTube uploads:', error);
    res.status(500).json({ error: error.message });
  }
});

export default app;
