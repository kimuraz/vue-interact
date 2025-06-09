import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';

export default defineConfig({
  build: {
    emptyOutDir: true,
    lib: {
      entry: 'src/index.ts',
      name: 'VueInteract',
    },
    rollupOptions: {
      external: ['vue', 'interactjs'],
      output: {
        globals: {
          vue: 'Vue',
          interactjs: 'interact',
        },
        format: 'es',
      },
    },
  },
  plugins: [
    dts({
      insertTypesEntry: true,
    }),
  ],
});
