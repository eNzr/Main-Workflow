/* Javascript Task
 *
 * @since 1.0.0.
 * */

'use strict';

function WebpackJSTask(gulp, $, theme) {

    return function () {

        /*
        return gulp.src([theme.js + '*.js'])
            //.pipe($.jslint({ /* this object represents the JSLint directives being passed down * / }))
            .pipe($.plumber())
            .pipe ($.uglify())
            .pipe(gulp.dest(theme.assets + 'js/minjs'));
        */


    };
}
module.exports = WebpackJSTask;

