// Serverless function: List recent uploads for a channel (API key optional)
// Path: /api/youtube/uploads

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

    function uploadsPlaylistIdFromChannelId(channelId) {
      if (!channelId || !channelId.startsWith('UC')) return null;
      return 'UU' + channelId.slice(2);
    }
    function thumbnailForVideoId(videoId) {
      return `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;
    }

    const channelId = await resolveChannelIdFromHandle(handle);
    if (!channelId) return res.status(404).json({ error: 'Channel not found', handle });
    const uploadsPlaylistId = uploadsPlaylistIdFromChannelId(channelId);

    if (YT_API_KEY) {
      const url = new URL('https://www.googleapis.com/youtube/v3/playlistItems');
      url.searchParams.set('part', 'snippet,contentDetails');
      url.searchParams.set('playlistId', uploadsPlaylistId);
      url.searchParams.set('maxResults', String(maxResults));
      url.searchParams.set('key', YT_API_KEY);
      const resp = await fetch(url);
      const json = await resp.json();
      const items = (json.items || []).map((it) => {
        const videoId = it.contentDetails?.videoId;
        const sn = it.snippet || {};
        const thumb = sn.thumbnails?.high?.url || sn.thumbnails?.default?.url || (videoId ? thumbnailForVideoId(videoId) : null);
        return {
          id: videoId,
          title: sn.title,
          description: sn.description,
          publishedAt: sn.publishedAt,
          thumbnail: thumb,
          url: videoId ? `https://www.youtube.com/watch?v=${videoId}` : null,
          channelTitle: sn.channelTitle,
        };
      });
      return res.status(200).json({ uploadsPlaylistId, items });
    }

    // Fallback without API key: use channel RSS feed
    const rssUrl = `https://www.youtube.com/feeds/videos.xml?channel_id=${channelId}`;
    const resp = await fetch(rssUrl);
    const xml = await resp.text();
    const entries = Array.from(xml.matchAll(/<entry>[\s\S]*?<id>(.*?)<\/id>[\s\S]*?<title>([\s\S]*?)<\/title>[\s\S]*?<published>(.*?)<\/published>/g));
    const items = entries.slice(0, maxResults).map((m) => {
      const idTag = m[1] || '';
      const videoIdMatch = idTag.match(/video:(.*)$/);
      const videoId = videoIdMatch ? videoIdMatch[1] : null;
      const title = m[2] ? m[2].replace(/\n/g, '').trim() : '';
      const publishedAt = m[3] || '';
      return {
        id: videoId,
        title,
        publishedAt,
        thumbnail: videoId ? thumbnailForVideoId(videoId) : null,
        url: videoId ? `https://www.youtube.com/watch?v=${videoId}` : null,
      };
    });
    return res.status(200).json({ uploadsPlaylistId, items });
  } catch (err) {
    console.error('Error in /api/youtube/uploads:', err);
    res.status(500).json({ error: 'Internal server error' });
  }
};