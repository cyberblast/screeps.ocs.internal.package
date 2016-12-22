module.exports = function(grunt) {
    const config = require('./screeps.json')
    if(!config.branch) {
        config.branch = 'sim'
    }
    if(!config.ptr) {
        config.ptr = false
    }

    require('load-grunt-tasks')(grunt);

    grunt.initConfig({
        screeps: {
            options: {
                email: config.email,
                password: config.password,
                branch: config.branch,
                ptr: config.ptr
            },
            dist: {
                src: ['dist/*.js']
            }
        },
        clean: ['dist/','pack/'],        
        copy: {
            public: {
                files: [{
                    expand: true,
                    cwd: 'ocs.public/',
                    src: '**',
                    dest: 'dist/',
                    filter: 'isFile',
                    rename: function (dest, src) {
                        // Change the path name. utilize dots for folders
                        return dest + src.replace(/\//g,'.');
                    }
                }]
            },
            internal: {
                files: [{
                    expand: true,
                    cwd: 'ocs.internal/',
                    src: '**',
                    dest: 'dist/',
                    filter: 'isFile',
                    rename: function (dest, src) {
                        // Change the path name. utilize dots for folders
                        return dest + src.replace(/\//g,'.');
                    }
                }]
            },
        },
        webpack: {
            main: {
                entry: './dist/main.js',
                output: {
                    path: 'pack/',
                    filename: 'main.js',
                    libraryTarget: 'commonjs2'
                },
                module: {
                    loaders: [{
                        test: /\.js$/,
                        exclude: /(src|node_modules|ScreepsAutocomplete)/,
                        loader: 'babel-loader',
                        query: {
                            presets: [
                                require.resolve('babel-preset-es2015')
                            ]
                        }
                    }]
                }
            }
        },
        uglify: {
            my_target: {
                files: [{
                    expand: true,
                    cwd: 'pack',
                    src: 'main.js',
                    dest: 'pack'
                }]
            }
        }
    });
    grunt.registerTask('switch-to-pack-deploy', function () {
        grunt.config.set('screeps.dist.src', ['pack/main.js']);
    });

    // clean
    grunt.registerTask('default', ['clean', 'copy:public', 'copy:internal']);
    grunt.registerTask('deploy', ['clean', 'copy:public', 'copy:internal', 'screeps']);
    // single file (experimental)
    grunt.registerTask('compress', ['clean', 'copy:public', 'copy:internal', 'webpack']);
    grunt.registerTask('compress-deploy', ['clean', 'copy:public', 'copy:internal', 'webpack', 'switch-to-pack-deploy','screeps']);
    // uglified (experimental)
    grunt.registerTask('ugly', ['clean', 'copy:public', 'copy:internal', 'webpack', 'uglify']);    
    grunt.registerTask('ugly-deploy', ['clean', 'copy:public', 'copy:internal', 'webpack', 'uglify', 'switch-to-pack-deploy', 'screeps']);
};