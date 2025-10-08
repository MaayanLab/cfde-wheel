import { defineConfig } from 'tsup';

export default defineConfig([
  {
    entry: ['src/index.tsx'],
    format: ['cjs'],
    sourcemap: false,
    clean: true,
    outDir: 'dist',
  },
  {
    entry: ['src/index.tsx'],
    format: ['esm'],
    platform: 'browser',
    outDir: 'dist',
    outExtension: () => ({ js: '.browser.js' }),
    external: ['react', 'react-dom'],
    noExternal: [/@mui\/.*/, /@emotion\/.*/],
    define: {
      'process.env.NODE_ENV': '"production"',
    },
  },
]);
