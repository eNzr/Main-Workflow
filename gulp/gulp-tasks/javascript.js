/* Javascript Task
 *
 * @since 1.0.0.
 * */

'use strict';

function javascr(gulp, $, proj) {
    return function () {
        return gulp.src([proj.dir.root + proj.dir.src + proj.dir.js + '*.js'])
        //.pipe($.jslint({ /* this object represents the JSLint directives being passed down */ }))
            .pipe($.plumber())
            .pipe($.uglify())
            .pipe(gulp.dest(proj.dir.root + proj.dir.dist + proj.dir.js));
    };
}


function webpack(gulp, $, proj) {
    return function () {
        // return $.exec.execFile('webpack'); /* if only run a terminal function (Gulp 4 ?) */
        return $.execDev('webpack', function (err, stdout, stderr) {
            console.log(stdout);
            console.log(stderr);
            //cb(err);
        });
        /* output message in the terminal -> debug */
    };
}

function JSTask(gulp, $, proj) {
    switch (proj.task.js) {
        case 'webpack': return webpack(gulp, $, proj); break;
        case 'js': return javascr(gulp, $, proj); break;
        default: return javascr(gulp, $, proj);
            // return $.exec.execFile('webpack'); /* if only run a terminal function (Gulp 4 ?) */
    }
}
module.exports = JSTask;
