/* *****************************
 *  Author:         eNzr
 *  Company:        Mevines
 *  Description:    Gulp WP workflow
 *  Version:        1.0.0
 *
 *  Notes
 *   // use rifraf instead of del if this need Windows compatibiity .. maybe one day .. or not
 *   // $       = require('gulp-load-plugins')({ pattern: '*' }), // too much lib for offline dev
 *   //
 * * ****************************** */

'use strict';

/* ------------- GULP MODULES ------------- */
var gulp    = require('gulp'),
    $       = {
        sass: require('gulp-sass'),
        plumber: require('gulp-plumber'),
        postcss: require('gulp-postcss'),
        rucksack: require('rucksack-css'),
        autoprefixer: require('autoprefixer'),
        cssnano: require('cssnano'),
        uglify: require('gulp-uglify'),
        rename: require('gulp-rename'),
        watch: require('gulp-watch'),
        del: require('del'),

        execDev: require('child_process').exec,
        browserSync: require('browser-sync').create()
    };
/*
exec: require('child_process'),
 */

var themeProj      = require( './gulp-tasks/_helpers.js' )().WpThemeDir;
var pluginProj     = require( './gulp-tasks/_helpers.js' )().WpPluginDir;
var pluginSingle   = require( './gulp-tasks/_helpers.js' )().singlePageDir;
var gameProj       = require( './gulp-tasks/_helpers.js' )().webAppDir;

var project = gameProj; // pluginProj;  //[themeProj, pluginProj, pluginSingle, gameProj];



/* ------------- FUNCTIONS ------------- */
function getTask(fileTask, task ) { return require('./gulp-tasks/' + fileTask)(gulp, $, project)(); }


/* ------------- TASKs ------------- */
gulp.task( 'cleanAll',      function() { getTask('clean'); });
gulp.task( 'style',         function() { getTask('style'); });
gulp.task( 'javascript',    function() { getTask('javascript'); });


//gulp.task('images',       function() { getTask('images'); });


/* ------------- Watches ------------- */
gulp.task( 'nonWebpackJS',  function() { gulp.watch([ project.root + project.src + '**/*.js' ], ['javascript']); });
gulp.task( 'watch',         ['build-all'], function() {
    //gulp.start('nonWebpackJS'); /* if not webpack driven */
    getTask('watch'); });

/* ------------- Start Here ------------- */
//gulp.task('build-all',    ['images', 'style', 'javascript']);
gulp.task( 'build-all',     ['cleanAll','javascript', 'style']);
gulp.task( 'default',       ['watch']);







