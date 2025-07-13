import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  build: {
    outDir: 'dist',
    rollupOptions: {
      input: {
        content: resolve(__dirname, 'src/content.js')
      },
      output: {
        entryFileNames: '[name].js'
      }
    }
  },
  publicDir: 'public' // automatically copy manifest.json and other files that don't be to be compiled with vite
});