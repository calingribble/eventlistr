// Karma configuration
// Generated on Sat Jun 20 2015 17:28:25 GMT-0400 (EDT)

module.exports = function(config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',


    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['mocha', 'chai'],


    // list of files / patterns to load in the browser
    files: [
      'client/bower_components/jquery/dist/jquery.js',
      'client/bower_components/angular/angular.js',
      'node_modules/angular-mocks/angular-mocks.js',
      'client/bower_components/angular-ui-router/release/angular-ui-router.js',
      'client/bower_components/bootstrap/dist/js/bootstrap.js',
      'client/bower_components/angular-bootstrap/ui-bootstrap.js',
      'client/bower_components/angular-bootstrap/ui-bootstrap-tpls.js',
      'client/bower_components/angular-socket-io/socket.js',
      'client/bower_components/moment/min/moment.min.js',
      'client/bower_components/angular-bootstrap-datetimepicker/src/js/datetimepicker.js',
      'client/bower_components/lodash/lodash.js',
      'client/socket.io-client/socket.io.js',
      'client/app.module.js',
      'client/app.state.js',
      'client/components/**/*.js',
      'client/shared/**/*.js'
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
    autoWatch: false,


    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['PhantomJS'],


    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: true
  });
};
