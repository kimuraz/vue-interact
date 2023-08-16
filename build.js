require('esbuild').build({
    entryPoints: ['src/index.ts'],
    bundle: true,
    minify: true,
    target: 'esNext',
    outfile: 'dist/vue-interact.min.js',
    external: ['interactjs', 'vue'],
    tsconfig: 'tsconfig.json', 
});