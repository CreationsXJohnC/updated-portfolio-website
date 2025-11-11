// Serverless function: Resolve YouTube channel details by handle or env
// Path: /api/youtube/channel

module.exports = async (req, res) => {
  try {
    const YT_API_KEY = process.env.YOUTUBE_API_KEY || '';
    const YT_HANDLE = process.env.YOUTUBE_CHANNEL_HANDLE || '@Creations_X';
    const YT_CHANNEL_ID = process.env.YOUTUBE_CHANNEL_ID || '';
    const YT_STRICT = ((process.env.YOUTUBE_STRICT_RESOLUTION ?? 'true').toLowerCase() === 'true');

    const handle = (req.query && req.query.handle) || YT_HANDLE;

    async function resolveChannelIdFromHandle(inputHandle) {
      const normalizedInput = (inputHandle || '').trim();
      const normalized = normalizedInput.startsWith('@') ? normalizedInput : `@${normalizedInput}`;

      if (YT_CHANNEL_ID) {
        return YT_CHANNEL_ID;
      }

      try {
        const pageUrl = `https://www.youtube.com/${normalized}`;
        const resp = await fetch(pageUrl, { headers: { 'User-Agent': 'Mozilla/5.0' } });
        const html = await resp.text();
        const canonicalMatch = html.match(/<link[^>]*rel=["']canonical["'][^>]*href=["']https:\/\/www\.youtube\.com\/channel\/(UC[0-9A-Za-z_-]{22})["'][^>]*>/i);
        if (canonicalMatch && canonicalMatch[1]) {
          return canonicalMatch[1];
        }
        const metaMatch = html.match(/itemprop=["']channelId["'][^>]*content=["'](UC[0-9A-Za-z_-]{22})["']/i);
        if (metaMatch && metaMatch[1]) {
          return metaMatch[1];
        }
        const looseMatch = html.match(/"channelId":"(UC[0-9A-Za-z_-]{22})"/);
        if (looseMatch && looseMatch[1]) {
          return looseMatch[1];
        }
      } catch (err) {
        console.error('YouTube handle scrape error:', err);
      }

      if (YT_API_KEY && !YT_STRICT) {
        try {
          const searchUrl = new URL('https://www.googleapis.com/youtube/v3/search');
          searchUrl.searchParams.set('part', 'snippet');
          searchUrl.searchParams.set('type', 'channel');
          searchUrl.searchParams.set('q', normalized.replace('@', ''));
          searchUrl.searchParams.set('maxResults', '1');
          searchUrl.searchParams.set('key', YT_API_KEY);
          const resp = await fetch(searchUrl);
          const json = await resp.json();
          const id = json?.items?.[0]?.snippet?.channelId || json?.items?.[0]?.id?.channelId;
          if (id) return id;
        } catch (err) {
          console.error('YouTube search error:', err);
        }
      }
      return null;
    }

    function uploadsPlaylistIdFromChannelId(channelId) {
      if (!channelId || !channelId.startsWith('UC')) return null;
      return 'UU' + channelId.slice(2);
    }

    const channelId = await resolveChannelIdFromHandle(handle);
    if (!channelId) {
      return res.status(404).json({ error: 'Channel not found', handle });
    }
    const uploadsPlaylistId = uploadsPlaylistIdFromChannelId(channelId);
    res.status(200).json({ handle, channelId, uploadsPlaylistId });
  } catch (err) {
    console.error('Error in /api/youtube/channel:', err);
    res.status(500).json({ error: 'Internal server error' });
  }
};