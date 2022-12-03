const { defineConfig } = require("cypress");

module.exports = defineConfig({
  chromeWebSecurity: false,
  pageLoadTimeout: 60000,
  defaultCommandTimeout: 10000,
  viewportWidth: 1280,
  viewportHeight: 720
});
