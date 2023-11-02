import { defineConfig } from 'cypress';

export default defineConfig({
  e2e: {
    baseUrl: 'http://localhost:6006',
    includeShadowDom: true,
    specPattern: 'cypress/integration/**/*.spec.ts',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
