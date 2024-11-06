// vitest.config.ts
import { defineConfig } from 'vitest/config';


export default defineConfig({
  test: {
    environment: 'jsdom',  // Use jsdom for DOM-based tests
    setupFiles: './test/setup.ts',  // Specify a setup file
    globals: true,  // Allows `expect` and other globals
  },
});
