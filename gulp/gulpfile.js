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
        sourcemaps: require("gulp-sourcemaps"),
        babel: require("gulp-babel"),
        concat: require("gulp-concat"),

        del: require('del'),

        execDev: require('child_process').exec,
        spawn: require('child_process').spawn,
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
gulp.task( 'javascript',    function() { getTask('javascript'); }); /*initial call from watch.js*/


//gulp.task('images',       function() { getTask('images'); });


/* ------------- Watches ------------- */

gulp.task( 'watch',         ['build-all'], function() { getTask('watch'); });

/* ------------- Start Here ------------- */
//gulp.task('build-all',    ['images', 'style', 'javascript']);
gulp.task( 'build-all',     ['cleanAll', 'style']);
gulp.task( 'default',       ['watch']);






/*
var gulp = require("gulp");
var sourcemaps = require("gulp-sourcemaps");
var babel = require("gulp-babel");
var concat = require("gulp-concat");

gulp.task("default", function () {
  return gulp.src("src/ * * / *.js")
    .pipe(sourcemaps.init())
    .pipe(babel())
    .pipe(concat("all.js"))
    .pipe(sourcemaps.write("."))
    .pipe(gulp.dest("dist"));
});
 */