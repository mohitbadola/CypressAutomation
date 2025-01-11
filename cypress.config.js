const { defineConfig } = require("cypress");
const excelToJson = require('convert-excel-to-json');
const fs = require('fs');
const ExcelJs = require("exceljs");

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
   async writeExcelTest({searchText, replaceText, change, filePath}) {
      const workbook = new ExcelJs.Workbook();
      await workbook.xlsx.readFile(filePath);
      const worksheet = workbook.getWorksheet("Sheet1");
      const output = await readExcel(worksheet, searchText);
    
      const cell = worksheet.getCell(output.row, output.column+change.colChange);
      cell.value = replaceText;
      return workbook.xlsx.writeFile(filePath).then(()=>{
        return true;
      })
      .catch((error)=>{
        return false;
      }
    );
    }
  })


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

async function readExcel(worksheet, searchText) {
  let output = { row: -1, column: -1 };
  worksheet.eachRow((row, rowNumber) => {
    row.eachCell((cell, colNumber) => {
      if (cell.value === searchText) {
        output.row = rowNumber;
        output.column = colNumber;
      }
    });
  });
  return output;
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
