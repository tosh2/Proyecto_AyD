// Protractor configuration file, see link for more information
// https://github.com/angular/protractor/blob/master/lib/config.ts

exports.config = {
    allScriptsTimeout: 11000,
    capabilities: {
      'browserName': 'chrome'
    },
    directConnect: true,
    baseUrl: 'http://localhost:4200/',
  
    // Specs here are the cucumber feature files
    specs: [
      '../e2e/features/*.feature'
    ],
  
    // Use a custom framework adapter and set its relative path
    framework: 'custom',
    frameworkPath: require.resolve('protractor-cucumber-framework'),
  
    // cucumber command line options
    cucumberOpts: {
      // require step definition files before executing features
      require: ['../e2e/steps/**/*.ts','../e2e/support/*.ts'],
      // <string[]> (expression) only execute the features or scenarios with tags matching the expression
      tags: [],
      // <boolean> fail if there are any undefined or pending steps
      strict: false,
      // <string[]> (type[:path]) specify the output format, optionally supply PATH to redirect formatter output (repeatable)
      format: [
        'json:./e2e/reports/summary.json',
        'json:./e2e/reports/tmp/results.json',
        
      ],
      // <boolean> invoke formatters without executing steps
      dryRun: false,
      // <string[]> ("extension:module") require files with the given EXTENSION after requiring MODULE (repeatable)
<<<<<<< HEAD
      compiler: []
=======
      compiler: [],
      keepAlive: false,
>>>>>>> upstream/Develop
    },
    // Here the magic happens
    plugins: [{
      package: 'protractor-multiple-cucumber-html-reporter-plugin',
      options:{
          // read the options part for more options
          automaticallyGenerateReport: true,
          removeExistingJsonReportFile: true
      }
    }],
    // Enable TypeScript for the tests
    onPrepare() {
      require('ts-node').register({
        project: 'e2e/tsconfig.e2e.json'
      });
     }
  }