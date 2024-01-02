import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    lib: {
      entry: 'src/main',
      name: 'CheatShooter',
      fileName: format => `cheat-shooter.${format}.js`,
      formats: ['es'],
    },
  },
});
