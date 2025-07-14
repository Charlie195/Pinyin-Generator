import { defineConfig } from 'vite';
import { resolve } from 'path';
import license from 'rollup-plugin-license';

export default defineConfig({
  build: {
    outDir: 'dist',
    rollupOptions: {
      input: {
        content: resolve(__dirname, 'src/content.js')
      },
      output: {
        entryFileNames: '[name].js'
      },
      plugins: [
        license({
          thirdParty: {
            output: resolve(__dirname, 'dist/third_party_licenses.txt')
          }
        })
      ]
    }
  },
  publicDir: 'public' // automatically copy manifest.json and other files that don't be to be compiled with vite
});