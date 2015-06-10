// Karma configuration
// Generated on Sat Jun 06 2015 16:57:15 GMT+0200 (Paris, Madrid (heure d’été))

module.exports = function(config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',


    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['jasmine'],


    // list of files / patterns to load in the browser
    files: [
      'bower_components/angular/angular.js',
      'bower_components/angular-timer/dist/angular-timer.js',
      'bower_components/angular-route/angular-route.js',
  		'bower_components/angular-bootstrap/ui-bootstrap.min.js',
  		'bower_components/momentjs/min/moment.min.js',
  		'bower_components/humanize-duration/humanize-duration.js',
  		'bower_components/angular-timer/dist/angular-timer.min.js',
  		'bower_components/angular-translate/angular-translate.min.js',
  		'bower_components/angular-translate-loader-static-files/angular-translate-loader-static-files.min.js',
  		'bower_components/jquery/dist/jquery.min.js',
  		'bower_components/bootstrap/dist/js/bootstrap.min.js',
      'bower_components/angular-mocks/angular-mocks.js',
      'app/app.js',
      'app/**/*.js',
      'tests/*Specs.js'
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


    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: false
  });
};
