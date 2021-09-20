exports.config = {
  capabilities: {
    browserName: "chrome"
  },
  directConnect: true,
  specs: ["testing-framework/tests/negativeTest.spec.js"],
  framework: "jasmine",

  onPrepare: function () {
    var AllureReporter = require("jasmine-allure-reporter");
    jasmine.getEnv().addReporter(
      new AllureReporter({
        allureReport: {
          enabled: true,
          resultsDir: "allure-results",
        },
      })
    ); 
  }

};
