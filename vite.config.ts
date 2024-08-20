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
      output: {
        exports: "named",
        globals: {
          vue: 'Vue',
        },
      },
      external: ['vue'],
    }
  },
  plugins: [
    dts({
      insertTypesEntry: true,
    }),
  ],
});
