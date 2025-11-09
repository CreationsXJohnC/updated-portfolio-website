<template>
  <div class="videos-view">
    <section class="hero">
      <div class="container">
        <h1 class="title">Creations X YouTube</h1>
        <p class="subtitle">Latest uploads and curated playlists from the YouTube channel.</p>
        <div class="cta-group">
          <a class="btn primary" :href="channelUrl" target="_blank" rel="noopener">Visit YouTube Channel</a>
          <a class="btn secondary" :href="featuredUrl" target="_blank" rel="noopener">Featured Page</a>
        </div>
      </div>
    </section>

    <section class="content container">
      <div class="section-header">
        <h2>Featured Uploads</h2>
        <p>Automatically updates as new videos are published.</p>
      </div>

      <div v-if="loadingUploads" class="loading">Loading uploads...</div>
      <div v-else-if="uploadsError" class="error">{{ uploadsError }}</div>
      <div v-else class="grid videos">
        <article v-for="video in featuredVideos" :key="video.id" class="card video">
          <a :href="video.url" target="_blank" rel="noopener" class="thumb-wrap">
            <img :src="video.thumbnail" :alt="video.title" class="thumb" />
          </a>
          <div class="card-body">
            <h3 class="card-title">{{ video.title }}</h3>
            <a :href="video.url" target="_blank" rel="noopener" class="btn small">Watch on YouTube</a>
          </div>
        </article>
      </div>

      <div class="section-header mt">
        <h2>Playlists</h2>
        <p>Curated collections to explore different themes.</p>
      </div>

      <div v-if="loadingPlaylists" class="loading">Loading playlists...</div>
      <div v-else-if="playlistsNote" class="note">{{ playlistsNote }}</div>
      <div v-else-if="playlistsError" class="error">{{ playlistsError }}</div>
      <div v-else class="grid playlists">
        <article v-for="pl in playlists" :key="pl.id" class="card playlist">
          <a :href="pl.url" target="_blank" rel="noopener" class="thumb-wrap">
            <img :src="pl.thumbnail" :alt="pl.title" class="thumb" />
          </a>
          <div class="card-body">
            <h3 class="card-title">{{ pl.title }}</h3>
            <p class="card-meta">{{ pl.itemCount }} videos</p>
            <a :href="pl.url" target="_blank" rel="noopener" class="btn small">View on YouTube</a>
          </div>
        </article>
      </div>
    </section>
  </div>
  
</template>

<script setup>
import { ref, computed, onMounted } from 'vue';

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:4000';
const handle = '@Creations_X';

const channelUrl = computed(() => `https://www.youtube.com/${handle}`);
const featuredUrl = computed(() => `https://www.youtube.com/${handle}/featured`);

// Uploads state
const uploads = ref([]);
const loadingUploads = ref(true);
const uploadsError = ref('');

// Playlists state
const playlists = ref([]);
const playlistsNote = ref('');
const loadingPlaylists = ref(true);
const playlistsError = ref('');

const featuredVideos = computed(() => uploads.value.slice(0, 6));

async function fetchUploads() {
  loadingUploads.value = true;
  uploadsError.value = '';
  try {
    const resp = await fetch(`${API_URL}/youtube/uploads?handle=${encodeURIComponent(handle)}&max=12`);
    const data = await resp.json();
    if (data.error) throw new Error(data.error);
    uploads.value = data.items || [];
  } catch (err) {
    uploadsError.value = `Failed to load uploads: ${err.message}`;
  } finally {
    loadingUploads.value = false;
  }
}

async function fetchPlaylists() {
  loadingPlaylists.value = true;
  playlistsError.value = '';
  playlistsNote.value = '';
  try {
    const resp = await fetch(`${API_URL}/youtube/playlists?handle=${encodeURIComponent(handle)}&max=12`);
    const data = await resp.json();
    if (data.note) playlistsNote.value = data.note;
    if (data.error) throw new Error(data.error);
    playlists.value = data.items || [];
  } catch (err) {
    playlistsError.value = `Failed to load playlists: ${err.message}`;
  } finally {
    loadingPlaylists.value = false;
  }
}

onMounted(() => {
  fetchUploads();
  fetchPlaylists();
});
</script>

<style scoped>
.videos-view {
  display: flex;
  flex-direction: column;
  /* Add offset for fixed navbar */
  margin-top: 90px;
}
.container {
  max-width: 1100px;
  margin: 0 auto;
  padding: 2rem 1rem;
}
.hero {
  background: linear-gradient(135deg, #0d0d0d, #1f1f1f);
  color: #fff;
  padding: 3rem 1rem;
}
.title { font-size: 2rem; font-weight: 700; }
.subtitle { opacity: 0.8; margin-top: 0.5rem; }
.cta-group { display: flex; gap: 1rem; margin-top: 1rem; }
.btn { display: inline-flex; align-items: center; padding: 0.6rem 1rem; border-radius: 8px; text-decoration: none; }
.btn.primary { background: #ff0033; color: #fff; }
.btn.secondary { background: #2a2a2a; color: #fff; }
.btn.small { font-size: 0.9rem; padding: 0.4rem 0.8rem; }
.section-header { margin-top: 2rem; }
.grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(240px, 1fr)); gap: 1rem; margin-top: 1rem; }
.card { background: #121212; color: #fff; border: 1px solid #2a2a2a; border-radius: 12px; overflow: hidden; display: flex; flex-direction: column; }
.thumb-wrap { display: block; aspect-ratio: 16/9; background: #000; }
.thumb { width: 100%; height: 100%; object-fit: cover; }
.card-body { padding: 0.8rem; display: flex; flex-direction: column; gap: 0.5rem; }
.card-title { font-size: 1rem; font-weight: 600; }
.card-meta { font-size: 0.85rem; opacity: 0.8; }
.loading, .error, .note { margin: 1rem 0; }
.mt { margin-top: 2rem; }
</style>