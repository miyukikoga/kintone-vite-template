/// <reference types="vitest" />
import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    target: 'es2021',
    rollupOptions: {
      input: {
        app2: `src/apps/app2/index.ts`,
      },
      output: {
        dir: 'dist',
        entryFileNames: `[name].js`,
        inlineDynamicImports: false,
      },
    },
  },
  test: {},
});
