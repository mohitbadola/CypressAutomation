const { defineConfig } = require("cypress");
const excelToJson = require('convert-excel-to-json');
const fs = require('fs');

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

  on('task', {
    excelToJsonConverter(filePath){
      const result = excelToJson({
        source: fs.readFileSync(filePath) // fs.readFileSync return a Buffer
    });
    return result;
    }
  })

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
