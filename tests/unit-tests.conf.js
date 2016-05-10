// Karma configuration
// Generated on Sat May 07 2016 13:45:14 GMT+0100 (BST)

"use strict";

module.exports = function(config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',


    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['jasmine'],


    // list of files / patterns to load in the browser don't use ionic bundle !!!!!!!!!!!!!!
    files: [
      '../www/lib/angular/angular.js',
      '../www/lib/angular-animate/angular-animate.js',
      '../www/lib/angular-cookies/angular-cookies.js',
      '../www/lib/angular-mocks/angular-mocks.js',
      '../www/lib/angular-sanitize/angular-sanitize.min.js',
      '../www/lib/angular-routes/angular-route.min.js',
      '../www/lib/angular-touch/angular-touch.min.js',
      '../www/lib/angular-ui-router/release/angular-ui-router.js',
      '../www/lib/ionic/js/ionic.js',
      '../www/lib/ionic/js/ionic-angular.min.js',
      '../www/js/*.js',
      'unit-tests/**/*.js'
    ],


    // list of files to exclude
    exclude: [
    ],


    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
    },


    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['progress'],


    // web server port
    port: 9876,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,


    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['Chrome'],

    plugins: [
            'karma-jasmine',
            'karma-chrome-launcher'
        ],


    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: false,

    // Concurrency level
    // how many browser should be started simultaneous
    concurrency: Infinity
  });
};
