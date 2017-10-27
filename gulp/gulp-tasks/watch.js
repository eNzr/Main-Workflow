/* Style Task
 *
 * @since 1.0.0.
 * */

'use strict';


function watchTask(gulp, $, proj) {

    return function () {
        $.browserSync.init( proj.browserSync );


        //gulp.watch([ proj.dir.root + '**/*.scss' ], ['style']);
        gulp.watch([ proj.dir.root + proj.dir.src + proj.dir.scss + '*.scss' ], ['style']);
        gulp.watch([ proj.dir.root + proj.dir.src + proj.dir.js + '**/*.js' ], ['javascript']); /* Should be managed by web pack */

        //gulp.watch([ projDir.src + projDir.scss + 'styles.scss' ], ['style']);
        //console.log(projDir.src + projDir.scss + 'styles.scss');

        //gulp.watch(proj.img + 'RAW/**/*.{jpg,JPG,png}', ['images']);

        gulp.watch([
            proj.dir.root + proj.dir.src + '**/*',
            proj.dir.root + proj.dir.dist + 'index.html',
            proj.dir.root + proj.dir.dist + '**/*'
            ]
        ).on('change', $.browserSync.reload);


        if (proj.task.js === 'webpack') {
            var  webpack_watch = $.spawn('webpack', ['--watch', '--color']);

            webpack_watch.stdout.on('data', (data) => { console.log(`stdout: ${data}`); });
            webpack_watch.stderr.on('data', (data) => { console.log(`stderr: ${data}`); });
            webpack_watch.on('close', (code) => { console.log(`child process exited with code ${code}`); });

        } else {
            gulp.start('javascript');
            gulp.watch([ proj.root + proj.src + '**/*.js' ], ['javascript']);
        }

    };

}
module.exports = watchTask;



/*

 */