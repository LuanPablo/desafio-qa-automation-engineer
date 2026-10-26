
const { defineConfig } = require('cypress');
const createBundler = require('@bahmutov/cypress-esbuild-preprocessor');

const {
  addCucumberPreprocessorPlugin,
} = require('@badeball/cypress-cucumber-preprocessor');

const {
  createEsbuildPlugin,
} = require('@badeball/cypress-cucumber-preprocessor/esbuild');

async function setupNodeEvents(on, config) {
  // Verificar log nos testes de API.
  on('task', {
    log(message) {
      console.log(message);
      return null;
    },
  });

  // Inicializa o Cucumber.
  await addCucumberPreprocessorPlugin(on, config);

  // Permite ao Cypress processar os arquivos .feature.
  on(
    'file:preprocessor',
    createBundler({
      plugins: [createEsbuildPlugin(config)],
    })
  );

  return config;
}

module.exports = defineConfig({
  e2e: {
    specPattern: [
      'cypress/api/**/*.cy.js',
      'cypress/e2e/**/*.cy.js',
      'cypress/e2e/**/*.feature',
    ],
    setupNodeEvents,
  },
});
