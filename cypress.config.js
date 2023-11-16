const { defineConfig } = require("cypress");

module.exports = defineConfig({
  video: true,
  reporter: "cypress-mochawesome-reporter",
  reporterOptions: {
    charts: true,
    overwrite: true,
    html: true,
    json: true,
    reportDir: "cypress/report",
    reportFilename: "report",
    inline: true,
  },
  e2e: {
    defaultCommandTimeout: 60000,
    requestTimeout: 50000,
    pageLoadTimeout: 100000,
    setupNodeEvents(on, config) {
      require("cypress-mochawesome-reporter/plugin")(on);
    },
    // specPattern: "*/.feature",
    experimentalRunAllSpecs: true,
    watchForFileChanges: false,
    // retries: 2,
    // watchForFileChanges: false,
    specPattern: "cypress\\e2e\\**.e2e.js", 
    // baseUrl: "https://tggaccountingdev.b2clogin.com/tggaccountingdev.onmicrosoft.com/b2c_1a_signup_signin_main/oauth2/v2.0/authorize?client_id=2c415ad5-49a0-490f-a1f0-3b3466b43f2e&scope=openid%20profile%20offline_access&redirect_uri=https%3A%2F%2Fhub-dev.tgg-accounting.com%2Foidc-response&client-request-id=067547f4-4bcc-4c83-b503-96a5735d25f1&response_mode=fragment&response_type=code&x-client-SKU=msal.js.browser&x-client-VER=2.28.3&client_info=1&code_challenge=H3kZxdEBDkbEDeh9eCruApuMldQ1Ux8Z-ot88BrAZjo&code_challenge_method=S256&nonce=65878e70-8e36-4665-b819-35416ddfe098&state=eyJpZCI6ImMzNjA1YmNiLTUyZTYtNDViMC04NDExLWYzZjM0MGMwYjkzZiIsIm1ldGEiOnsiaW50ZXJhY3Rpb25UeXBlIjoicmVkaXJlY3QifX0%3D",
    baseUrl: 'https://hub-dev.tgg-accounting.com/login',
    env :{
      userName: "neel@hypertrends.com",
      password: "Test123!"
    },
    setupNodeEvents(on, config) {

      // implement node event listeners here
    },
  },
});
