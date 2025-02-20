const { defineConfig } = require("cypress");

module.exports = defineConfig({
  retries: {
    runMode: 1,
    openMode: 1,
  },
  "defaultCommandTimeout": 30000,
  "pageLoadTimeout": 30000,
  video: true,
  videoCompression: true,
  reporter: 'cypress-mochawesome-reporter',
  reporterOptions: {
    reportDir: "cypress/reports",
    reportFilename: "automation-test-report",
    timestamp: "false",
    charts: true,
    reportPageTitle: 'Automation Test Report',
    reportTitle:'Automation Test Report',
    embeddedScreenshots: true,
    inlineAssets: true,
    saveAllAttempts: false,
    overwrite: true,
  },
  e2e: {
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
      
    },
  },
  chromeWebSecurity: false,
});
