import fetch from 'node-fetch';

export default async (req, res) => {
  const YOUTUBE_API_KEY = process.env.YOUTUBE_API_KEY;
  const CHANNEL_ID = 'UCs_t_3M3O3f9gAsd6L_35wA';
  const url = `https://www.googleapis.com/youtube/v3/search?key=${YOUTUBE_API_KEY}&channelId=${CHANNEL_ID}&part=snippet,id&order=date&maxResults=10`;

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`YouTube API failed with status: ${response.status}`);
    }
    const data = await response.json();
    res.status(200).json(data);
  } catch (error) {
    console.error('Error fetching from YouTube API:', error);
    res.status(500).json({ message: 'Failed to fetch from YouTube API' });
  }
};
