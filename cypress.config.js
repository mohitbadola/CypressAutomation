const { defineConfig } = require("cypress");
const browserify = require("@cypress/browserify-preprocessor");
const {
  addCucumberPreprocessorPlugin,
} = require("@badeball/cypress-cucumber-preprocessor");
const {
  preprendTransformerToOptions,
} = require("@badeball/cypress-cucumber-preprocessor/browserify");

async function setupNodeEvents(on, config) {
  // Add Mochawesome Reporter
  require("cypress-mochawesome-reporter/plugin")(on);

  // Add Cucumber Preprocessor Plugin
  await addCucumberPreprocessorPlugin(on, config);

  // Use browserify with the preprocessor
  on(
    "file:preprocessor",
    browserify(preprendTransformerToOptions(config, browserify.defaultOptions))
  );

  return config;
}

module.exports = defineConfig({
  // defaultCommandTimeout: 6000,
  reporter: "cypress-mochawesome-reporter",
  env: {
    url: "https://rahulshettyacademy.com",
  },
  e2e: {
    specPattern: 'cypress/integration/examples/*.js',
    // specPattern: "cypress/integration/examples/BDD/*.feature", // Recursive pattern
    supportFile: "cypress/support/e2e.js", // Ensure this exists
    setupNodeEvents,
  },
});
