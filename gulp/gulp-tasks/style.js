/* Style Task
*
* @since 1.0.0.
* */

'use strict';

function cssTask(gulp, $, proj) {
    var prefix = {
            default:    	['last 2 version'],
            current:    	['> 1%', 'IE 9'],
            large:      	['last 20 version'],
            all:        	['last 100 version']
        };

    //console.log('style 1');

    return function () {
        //alert ('style 2');
            return gulp.src([proj.dir.root + proj.dir.src + proj.dir.scss +  '*.scss'])
                .pipe($.plumber())
                .pipe($.sass({
                    outputStyle: 'expanded',
                    indentType: 'tab',
                    indentWidth: '1'
                }).on('error', $.sass.logError))
                .pipe($.postcss([
                    // plugins.rucksack,
                    $.autoprefixer({browsers: prefix.default, cascade: false }),
                    $.cssnano()
                ]).on('error', $.sass.logError))
                .pipe(gulp.dest(proj.dir.root + proj.dir.dist + proj.dir.css ));
    };

}
module.exports = cssTask;


