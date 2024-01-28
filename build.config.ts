import { defineBuildConfig } from 'unbuild';

export default defineBuildConfig({
  entries: ['./src/main'],
  outDir: 'dist',
  declaration: true,
  clean: true,
  rollup: {
    esbuild: {
      minify: true,
    },
  },
});
