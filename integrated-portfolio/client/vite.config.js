import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'

export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': resolve(process.cwd(), 'src'),
    },
  },
  server: {
    port: 5173,
    open: true,
    cors: true,
    proxy: {
      '/graphql': {
        target: 'http://localhost:4000',
        changeOrigin: true,
        secure: false,
      },
    },
  },
  build: {
    outDir: 'dist',
    sourcemap: false, // Disable sourcemaps in production for smaller bundle
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true, // Remove console.log in production
        drop_debugger: true,
      },
    },
    rollupOptions: {
      output: {
        manualChunks: {
          // Core Vue ecosystem
          'vue-vendor': ['vue', 'vue-router', 'pinia'],
          // GraphQL and Apollo
          'apollo-vendor': ['@apollo/client', '@vue/apollo-composable', 'graphql', 'graphql-tag'],
          // Utilities
          'utils-vendor': ['@vueuse/core'],
        },
        // Optimize chunk file names
        chunkFileNames: 'js/[name]-[hash].js',
        entryFileNames: 'js/[name]-[hash].js',
        assetFileNames: (assetInfo) => {
          const info = assetInfo.name.split('.')
          const extType = info[info.length - 1]
          if (/\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/i.test(assetInfo.name)) {
            return `media/[name]-[hash][extname]`
          }
          if (/\.(png|jpe?g|gif|svg|webp|avif)(\?.*)?$/i.test(assetInfo.name)) {
            return `images/[name]-[hash][extname]`
          }
          if (extType === 'css') {
            return `css/[name]-[hash][extname]`
          }
          return `assets/[name]-[hash][extname]`
        },
      },
    },
    // Optimize chunk size
    chunkSizeWarningLimit: 1000,
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@use "@/styles/variables.scss" as *;`,
      },
    },
    // Enable CSS source maps in development
    devSourcemap: true,
  },
  // Enable experimental features for better performance
  esbuild: {
    target: 'es2020',
    drop: ['console', 'debugger'], // Remove console and debugger in production
  },
  // Optimize dependencies
  optimizeDeps: {
    include: [
      'vue',
      'vue-router',
      'pinia',
      '@apollo/client',
      '@vue/apollo-composable',
      'graphql',
      'graphql-tag',
      '@vueuse/core'
    ],
  },
})