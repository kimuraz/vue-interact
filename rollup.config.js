import { terser } from "rollup-plugin-terser";
import css from 'rollup-plugin-css-only';

export default [
  {
    input: 'src/index.js',
    output: [{
      file: 'dist/vue-interact.min.js',
      format: 'iife',
    plugins: [
      terser()
    ],
    },
    {
      file: 'dist/vue-interact.esm.js',
      format: 'esm',
    }
    ],
    external: ['vue', 'interactjs'],
  },
  {
    input: 'src/vue-interact.css',
    plugins: [
      css({
        output: 'dist/vue-interact.css',
      }),
    ],
  },
];
