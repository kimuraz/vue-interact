require('esbuild').build({
    entryPoints: ['src/index.ts'],
    bundle: true,
    minify: true,
    target: 'es2016',
    outfile: 'dist/vue-interact.min.js',
    external: ['interactjs', 'vue'],
});