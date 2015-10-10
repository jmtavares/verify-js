module.exports = function (grunt) {

    'use strict';

    require('load-grunt-tasks')(grunt);

    grunt.initConfig({

        pkg: grunt.file.readJSON('package.json'),

        eslint: {
            options: {
                configFile: 'eslint.json'
            },
            target: ['src/*.js']
        },

        uglify: {
            dist: {
                options: {
                    mangle: true,
                    preserveComments: true,
                    banner: grunt.file.readJSON('package.json').banner
                },
                files: {
                    'verify.min.js': [
                        'node_modules/es6-promise/dist/es6-promise.min.js',
                        'src/*.js'
                    ]
                }
            },
            debug: {
                options: {
                    mangle: false,
                    beautify: true,
                    compress: false,
                    preserveComments: true,
                    banner: grunt.file.readJSON('package.json').banner
                },
                files: {
                    'verify.js': [
                        'node_modules/es6-promise/dist/es6-promise.min.js',
                        'src/*.js'
                    ]
                }
            }
        },
        versioncheck: {
            options: {
                hideUpToDate : true
            }
        },
        karma: {
            unit: {
                configFile: 'karma.conf.js'
            }
        }
    });

    grunt.registerTask('default', [
        'test',
        'uglify'
    ]);

    grunt.registerTask('test', [
        'eslint',
        'karma'
    ]);
};
