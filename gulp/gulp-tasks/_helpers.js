/**
 * Created by mevines on 8/02/17.
 */

'use strict';

function conf () {
    var themeName = 'mevinestheme';
    var pluginName = '_mevines_rest';
    var project = 'wp';
    var servName = 'mevines.wpdev.local';
    var servNameApp = 'mevines.wpdevapp.local';
    var webApp = 'localhost';


    var config = {
        singlePageDir: {
            serverName: servNameApp,
            port:       3000,
            browserSync: {
                proxy: {
                    open: 'external',
                    proxy: servNameApp,
                    port: 3002
                }
            },
            dir: {
                src:        '../_src/',
                root:       '../_src/',
                htmlmod:    '../_src/modules/',
                dest:       '../_dist/',
                dist:       '../_dist/',
                assets:     'assets/',
                js:         'assets/js/',
                css:        'assets/css/',
                scss:       'assets/scss/'
            },
            task:{
                js:         'main'
            }
        },
        WpThemeDir: {
            serverName: servName,
            port:       3001,
            browserSync: {
                proxy: {
                    open: 'external',
                    proxy: servName,
                    port: 3002
                }
            },
            dir: {
                src:        '',
                dest:       '',
                dist:       '',
                root:       '../themes/' + themeName + '/',
                assets:     '../themes/' + themeName + '/' + 'assets/',
                scss:       '../themes/' + themeName + '/' + 'sass/',
                js:         '../themes/' + themeName + '/' + 'js/',
                img:        '../themes/' + themeName + '/' + 'img/',
                languages:  '../themes/' + themeName + '/' + 'languages/'
            },
            task:{
                js:         'main'
            }
        },
        WpPluginDir: {
            serverName: servName,
            port:       3002,
            browserSync: {
                proxy: {
                    open: 'external',
                    proxy: servName,
                    port: 3002
                }
            },
            dir: {
                src:        '',
                dest:       '',
                dist:       '',
                root:       '../plugins/' + pluginName + '/',
                assets:     '../plugins/' + pluginName + '/' + 'assets/',
                scss:       '../plugins/' + pluginName + '/assets/' + 'sass/',
                css:        '../plugins/' + pluginName + '/assets/' + 'css/',
                js:         '../plugins/' + pluginName + '/assets/' + 'js/',
                srcjs:      '../plugins/' + pluginName + '/assets/' + 'src-js/',
                img:        '../plugins/' + pluginName + '/assets/' + 'img/',
                languages:  '../plugins/' + pluginName + '/assets/' + 'languages/'
            },
            task:{
                js:         'main'
            }


        },
        webAppDir: {
            serverName: webApp,
            port:       3000,
            browserSync: { server: { baseDir: "../_dist/" } },
            dir: {
                src:        '_src/',
                root:       '../',
                htmlmod:    '_src/modules/',
                dest:       '_dist/',
                dist:       '_dist/',
                assets:     'assets/',

                js:         'assets/js/',
                srcjs:      'assets/src-js/',
                scss:       'assets/scss/',
                css:        'assets/css/',
                img:        'assets/img/',
                svg:        'assets/svg/'
            },
            task:{
                js:         'webpack'
            }

        }


    };

    return config;
}

module.exports = conf;