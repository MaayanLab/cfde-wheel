import { defineConfig } from 'tsup';

export default defineConfig([
  {
    entry: ['src/index.tsx'],
    format: ['cjs', 'esm'],
    sourcemap: false,
    clean: true,
    outDir: 'dist',
    minify: true,
    dts: true
  }
]);
