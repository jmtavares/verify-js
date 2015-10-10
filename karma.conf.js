module.exports = function (config) {
    config.set({
            // base path that will be used to resolve all patterns (eg. files, exclude)
            basePath: '',

            // frameworks to use
            // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
            frameworks: ['jasmine'],

            // list of files / patterns to load in the browser (order matters)
            files: [
                'node_modules/jasmine-es6-promise-matchers/jasmine-es6-promise-matchers.js',
                'node_modules/promise-polyfill/Promise.js',
                'src/*.js',
                'test/*.spec.js'
            ],

            // list of files to exclude
            exclude: [],

            // test results reporter to use
            // possible values: 'dots', 'progress'
            // available reporters: https://npmjs.org/browse/keyword/karma-reporter
            reporters: ['dots', 'coverage'],

            preprocessors: {
                // source files, that you wanna generate coverage for
                // do not include tests or libraries
                // (these files will be instrumented by Istanbul)
                'src/*.js': ['coverage']
            },

            coverageReporter: {
                reporters: [
                    {
                        type: 'text-summary'
                    },
                    {
                        type: 'html',
                        dir: 'test/coverage/'
                    }
                ]
            },

            // web server port
            port: 9876,

            // enable / disable colors in the output (reporters and logs)
            colors: true,

            // level of logging
            // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
            logLevel: config.LOG_INFO,

            // start these browsers
            // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
            browsers: ['PhantomJS'],

            // Continuous Integration mode
            // if true, Karma captures browsers, runs the tests and exits
            singleRun: true
        }
    );
};

