// Serverless function: List playlists for a channel (requires API key)
// Path: /api/youtube/playlists

module.exports = async (req, res) => {
  try {
    const YT_API_KEY = process.env.YOUTUBE_API_KEY || '';
    const YT_HANDLE = process.env.YOUTUBE_CHANNEL_HANDLE || '@Creations_X';
    const YT_CHANNEL_ID = process.env.YOUTUBE_CHANNEL_ID || '';
    const YT_STRICT = ((process.env.YOUTUBE_STRICT_RESOLUTION ?? 'true').toLowerCase() === 'true');

    const handle = (req.query && req.query.handle) || YT_HANDLE;
    const maxResults = Math.min(parseInt((req.query && req.query.max) || '12', 10), 50);

    async function resolveChannelIdFromHandle(inputHandle) {
      const normalizedInput = (inputHandle || '').trim();
      const normalized = normalizedInput.startsWith('@') ? normalizedInput : `@${normalizedInput}`;
      if (YT_CHANNEL_ID) return YT_CHANNEL_ID;
      try {
        const pageUrl = `https://www.youtube.com/${normalized}`;
        const resp = await fetch(pageUrl, { headers: { 'User-Agent': 'Mozilla/5.0' } });
        const html = await resp.text();
        const canonicalMatch = html.match(/<link[^>]*rel=["']canonical["'][^>]*href=["']https:\/\/www\.youtube\.com\/channel\/(UC[0-9A-Za-z_-]{22})["'][^>]*>/i);
        if (canonicalMatch && canonicalMatch[1]) return canonicalMatch[1];
        const metaMatch = html.match(/itemprop=["']channelId["'][^>]*content=["'](UC[0-9A-Za-z_-]{22})["']/i);
        if (metaMatch && metaMatch[1]) return metaMatch[1];
        const looseMatch = html.match(/"channelId":"(UC[0-9A-Za-z_-]{22})"/);
        if (looseMatch && looseMatch[1]) return looseMatch[1];
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

    const channelId = await resolveChannelIdFromHandle(handle);
    if (!channelId) return res.status(404).json({ error: 'Channel not found', handle });

    if (!YT_API_KEY) {
      return res.status(200).json({ items: [], note: 'Set YOUTUBE_API_KEY to enable playlists.' });
    }

    const url = new URL('https://www.googleapis.com/youtube/v3/playlists');
    url.searchParams.set('part', 'snippet,contentDetails');
    url.searchParams.set('channelId', channelId);
    url.searchParams.set('maxResults', String(maxResults));
    url.searchParams.set('key', YT_API_KEY);
    const resp = await fetch(url);
    const json = await resp.json();
    const items = (json.items || []).map((it) => {
      const sn = it.snippet || {};
      const thumb = sn.thumbnails?.high?.url || sn.thumbnails?.default?.url || null;
      return {
        id: it.id,
        title: sn.title,
        description: sn.description,
        itemCount: it.contentDetails?.itemCount || 0,
        thumbnail: thumb,
        url: it.id ? `https://www.youtube.com/playlist?list=${it.id}` : null,
      };
    });
    return res.status(200).json({ items });
  } catch (err) {
    console.error('Error in /api/youtube/playlists:', err);
    res.status(500).json({ error: 'Internal server error' });
  }
};