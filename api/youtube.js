import { Router } from 'express';
import fetch from 'node-fetch';

const router = Router();
const CHANNEL_ID = 'UCbfMpWA_wjDonjsRvD8vFmg';

router.get('/uploads', async (req, res) => {
  const YOUTUBE_API_KEY = process.env.YOUTUBE_API_KEY;
  if (!YOUTUBE_API_KEY) {
    return res.status(500).json({ error: 'YouTube API key not configured.' });
  }

  const max = Math.min(parseInt(req.query.max) || 10, 50);
  const url = `https://www.googleapis.com/youtube/v3/search?key=${YOUTUBE_API_KEY}&channelId=${CHANNEL_ID}&part=snippet,id&order=date&maxResults=${max}&type=video`;

  try {
    const response = await fetch(url);
    const data = await response.json();

    if (!response.ok) {
      console.error('YouTube API Error (uploads):', data);
      return res.status(response.status).json({ error: data?.error?.message || 'YouTube API error' });
    }

    const items = (data.items || []).map(item => ({
      id: item.id?.videoId,
      title: item.snippet?.title || '',
      thumbnail:
        item.snippet?.thumbnails?.medium?.url ||
        item.snippet?.thumbnails?.default?.url ||
        '',
      url: `https://www.youtube.com/watch?v=${item.id?.videoId}`,
    }));

    res.status(200).json({ items });
  } catch (error) {
    console.error('Error fetching YouTube uploads:', error);
    res.status(500).json({ error: 'Failed to fetch YouTube uploads.' });
  }
});

router.get('/playlists', async (req, res) => {
  const YOUTUBE_API_KEY = process.env.YOUTUBE_API_KEY;
  if (!YOUTUBE_API_KEY) {
    return res.status(500).json({ error: 'YouTube API key not configured.' });
  }

  const max = Math.min(parseInt(req.query.max) || 10, 50);
  const url = `https://www.googleapis.com/youtube/v3/playlists?key=${YOUTUBE_API_KEY}&channelId=${CHANNEL_ID}&part=snippet,contentDetails&maxResults=${max}`;

  try {
    const response = await fetch(url);
    const data = await response.json();

    if (!response.ok) {
      console.error('YouTube API Error (playlists):', data);
      return res.status(response.status).json({ error: data?.error?.message || 'YouTube API error' });
    }

    const items = (data.items || []).map(item => ({
      id: item.id,
      title: item.snippet?.title || '',
      thumbnail:
        item.snippet?.thumbnails?.medium?.url ||
        item.snippet?.thumbnails?.default?.url ||
        '',
      url: `https://www.youtube.com/playlist?list=${item.id}`,
      itemCount: item.contentDetails?.itemCount || 0,
    }));

    res.status(200).json({ items });
  } catch (error) {
    console.error('Error fetching YouTube playlists:', error);
    res.status(500).json({ error: 'Failed to fetch YouTube playlists.' });
  }
});

export default router;