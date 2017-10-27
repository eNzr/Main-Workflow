/* Clean build Task
 *
 * @since 1.0.0.
 *
 * Note : not in use in wp theme
 * */


'use strict';

function cleaner(gulp, $, proj) {

    return function () {
        var toErasePaths = [
            proj.dir.root + proj.dir.dist + proj.dir.css  + '*.css',
            proj.dir.root + proj.dir.dist + proj.dir.js  + '*.js'
            ];

        return $.del(toErasePaths , {force: true}).then(paths => {
                console.log('Deleted files and folders:\n', paths.join('\n'));
            });

        /*
        return $.del([
            proj.dir.root + proj.dir.dist + proj.dir.css + '**.*'
        ]), function (err, paths) {
            console.log('Deleted files/folders:\n', paths.join('\n'));
        };
        */
    }
}

module.exports = cleaner;

