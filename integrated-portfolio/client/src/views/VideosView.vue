<template>
  <div class="videos-view">
    <ThreeBackground 
      variant="starField" 
      :enableMouse="true" 
      :starDensityNear="12000"
      :starDensityFar="24000"
      :starSizeNear="0.12"
      :starSizeFar="0.09"
      :motionScale="0.08"
      textureSrc="/sparkle-png-24.png"
    />
    <section class="hero">
      <div class="container">
        <div class="cta-group">
          <div class="cta-text">
            <h1 class="title">Creations X YouTube</h1>
            <p class="subtitle">Please click the button below and subscirbe to the Creations X YouTube channel!</p>
          </div>
          <a class="btn primary" :href="channelUrl" target="_blank" rel="noopener" aria-label="Visit YouTube Channel">
            <img :src="ytButtonImg" alt="YouTube" class="btn-img" />
          </a>
        </div>
      </div>
    </section>

    <section class="content container">
      <div class="section-header centered">
        <h2>Featured Uploads</h2>
        <p>Automatically updates as new videos are published.</p>
      </div>

      <div v-if="loadingUploads" class="loading">Loading uploads...</div>
      <div v-else-if="uploadsError" class="error">{{ uploadsError }}</div>
      <div v-else class="grid videos">
        <div v-for="video in featuredVideos" :key="video.id" class="video-item">
          <a :href="video.url" target="_blank" rel="noopener" class="yt-thumb">
            <img :src="video.thumbnail" :alt="video.title" class="thumb" />
            <span class="yt-play">▶</span>
          </a>
          <a :href="video.url" target="_blank" rel="noopener" class="yt-title">{{ video.title }}</a>
        </div>
      </div>

      <div class="section-header centered mt">
        <h2>Playlists</h2>
        <p>Curated collections to explore different themes.</p>
      </div>

      <div v-if="loadingPlaylists" class="loading">Loading playlists...</div>
      <div v-else-if="playlistsNote" class="note">{{ playlistsNote }}</div>
      <div v-else-if="playlistsError" class="error">{{ playlistsError }}</div>
      <div v-else class="grid playlists">
        <div v-for="pl in playlists" :key="pl.id" class="playlist-item">
          <a :href="pl.url" target="_blank" rel="noopener" class="yt-thumb">
            <img :src="pl.thumbnail" :alt="pl.title" class="thumb" />
            <span class="yt-count">{{ pl.itemCount }} videos</span>
          </a>
          <a :href="pl.url" target="_blank" rel="noopener" class="yt-title">{{ pl.title }}</a>
        </div>
      </div>
    </section>
  </div>
  
</template>

<script setup>
import { ref, computed, onMounted } from 'vue';
import ThreeBackground from '@/components/ThreeBackground.vue';
import ytButtonImg from '@/assets/images/logos/Creations X YouTube Logo 2017.png';

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:4000';
const handle = '@Creations_X';

const channelUrl = computed(() => `https://www.youtube.com/${handle}`);

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
  padding-top: 90px;
  position: relative;
  background: var(--bg-primary);
}
.container {
  max-width: 1100px;
  margin: 0 auto;
  padding: 2rem 1rem;
}
.hero {
  background: transparent;
  color: var(--text-primary);
  padding: 3rem 1rem 2rem;
  position: relative;
  z-index: 1;
}
.title { font-size: clamp(2rem, 4vw, 3rem); font-weight: 600; margin-bottom: 0; }
.subtitle { opacity: 0.8; margin-top: 0.1875rem; }
.cta-group { display: flex; flex-direction: column; align-items: center; gap: 1rem; margin-top: 1rem; }
.cta-text { display: flex; flex-direction: column; justify-content: center; align-items: center; text-align: center; }
.btn { display: inline-flex; align-items: center; padding: 0 1rem; border-radius: 8px; text-decoration: none; }
.btn.primary { background: #fff; color: #000; }
.btn-img { height: 112px; display: block; }
.btn, .btn * { transition: transform 180ms ease-out, filter 180ms ease-out, box-shadow 180ms ease-out; }
.btn:hover, .btn:focus { 
  transform: scale(1.10) translateY(-2px) !important; 
  filter: brightness(1.10); 
  background: #fff; 
  box-shadow: 0 12px 28px rgba(0,0,0,0.32), inset 0 0 0 1px rgba(0,0,0,0.18);
}
.btn:active { 
  transform: scale(1.05) !important; 
  filter: brightness(1.05); 
  background: #fff; 
  box-shadow: 0 6px 18px rgba(0,0,0,0.28), inset 0 0 0 1px rgba(0,0,0,0.20);
}
.btn.secondary { background: #2a2a2a; color: #fff; }
.section-header { margin-top: 0.5rem; }
.section-header.centered { text-align: center; }
.section-header h2 { font-size: clamp(1.5rem, 3vw, 2.25rem); margin-bottom: 0; }
.section-header p { margin-top: 0.1875rem; }
.grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(300px, 1fr)); gap: 1.25rem; margin-top: 1rem; }
/* Increase bottom spacing before footer while keeping tighter top padding */
.content.container { padding-top: 0.5rem; padding-bottom: 8rem; }

/* Responsive adjustments for footer spacing */
@media (max-width: 600px) {
  .content.container { padding-bottom: 5rem; }
}

@media (min-width: 601px) and (max-width: 1024px) {
  .content.container { padding-bottom: 7rem; }
}
/* Force 3 columns for videos section */
.grid.videos { grid-template-columns: repeat(3, 1fr); }
/* YouTube-style items: no card frame, just thumbnail + title */
.video-item, .playlist-item { display: flex; flex-direction: column; gap: 0.5rem; }
.yt-thumb { position: relative; display: block; aspect-ratio: 16/9; background: #000; border-radius: 8px; overflow: hidden; }
.thumb { width: 100%; height: 100%; object-fit: cover; transition: none; }
.yt-title { display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical; overflow: hidden; text-overflow: ellipsis; color: var(--text-primary); text-decoration: none; font-size: 0.95rem; font-weight: 600; transition: none; }
.yt-title:hover, .yt-title:focus, .yt-title:active { text-decoration: none; transform: none !important; }
.yt-play { position: absolute; bottom: 8px; left: 8px; background: rgba(0,0,0,0.6); color: #fff; font-size: 0.85rem; padding: 4px 8px; border-radius: 4px; }
.yt-count { position: absolute; bottom: 8px; right: 8px; background: rgba(0,0,0,0.6); color: #fff; font-size: 0.85rem; padding: 4px 8px; border-radius: 4px; }
.yt-thumb:hover .thumb,
.yt-thumb:focus .thumb,
.yt-thumb:active .thumb,
.thumb:hover { transform: none !important; filter: none !important; }
.yt-thumb:hover,
.yt-thumb:focus,
.yt-thumb:active { transform: none !important; }
.loading, .error, .note { margin: 1rem 0; }
.mt { margin-top: 5rem; }

/* Light mode: enforce black by default and white on hover/focus (scoped-safe) */
:root[data-theme="light"] :deep(.videos-view .yt-title) { color: var(--text-primary) !important; transition: color 120ms ease-out; }
:root[data-theme="light"] :deep(.videos-view .yt-title:hover),
:root[data-theme="light"] :deep(.videos-view .yt-title:focus) { color: #ffffff !important; }
</style>
:deep(.videos-view .yt-title:hover),
:deep(.videos-view .yt-title:focus) { color: #ffffff !important; }