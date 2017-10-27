/* Images Task
 *
 * @since 1.0.0.
 * */

'use strict';

function ImagesTask(gulp, $, proj) {

    return function () {
        return gulp.src(proj.dir.root + proj.dir.src + proj.dir.img + 'RAW/* * / *.{jpg,JPG,png}')
            .pipe($.newer(proj.dir.root + proj.dir.dist + proj.dir.img))
            .pipe($.image())
            .pipe(gulp.dest(proj.dir.root + proj.dir.dist + proj.dir.img));
    };
}
module.exports = ImagesTask;

