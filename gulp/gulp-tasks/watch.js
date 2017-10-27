/* Style Task
 *
 * @since 1.0.0.
 * */

'use strict';


function watchTask(gulp, $, proj) {

    return function () {
        $.browserSync.init( proj.browserSync );


        //gulp.watch([ proj.dir.root + '**/*.scss' ], ['style']);
        gulp.watch([ proj.dir.root + proj.dir.src + proj.dir.scss +  '*.scss' ], ['style']);
        //gulp.watch([ proj.root + proj.src + '**/*.js' ], ['javascript']); /* Should be managed by web pack */

        //gulp.watch([ projDir.src + projDir.scss + 'styles.scss' ], ['style']);
        //console.log(projDir.src + projDir.scss + 'styles.scss');

        //gulp.watch(proj.img + 'RAW/**/*.{jpg,JPG,png}', ['images']);

        gulp.watch([
            proj.dir.root + proj.dir.src + '**/*',
            proj.dir.root + proj.dir.dist + 'index.html',
            proj.dir.root + proj.dir.dist + '**/*'
            ]
        ).on('change', $.browserSync.reload);


    };

}
module.exports = watchTask;