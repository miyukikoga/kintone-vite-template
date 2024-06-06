/// <reference types="vitest" />
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  build: {
    target: 'es2021',
    rollupOptions: {
      input: {
        app1: `src/apps/app1/index.tsx`,
      },
      output: {
        dir: 'dist',
        entryFileNames: `[name].js`,
        inlineDynamicImports: false,
      },
    },
  },
  test: {},
  plugins: [react()],
});
