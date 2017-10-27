#!/bin/bash
#
# Table of Contents
#   - config variables
#   - package lists
#   - files & functions
# --------------------------------

# ----------------------------------------------------------------------------------------------------------------
#                                                                                               config variables
# ----------------------------------------------------------------------------------------------------------------

    useYarnOverNpm=true                 # true | false # if false -> use npm
    downloadDepedencies=true            # true | false # if false -> generate config files only
    installGlobalDepedencies=false      # true | false

    foreceOvewriteGitignore=true       # true | false

    packageJson="copyFile"              # false | copyFile | init | initY | anything else will create an empty file
    gitignore="copyFile"                # false | copyFile | anything else will create an empty file
    webpackConfigFile="copyFile"        # false | copyFile | anything else will create an empty file
                                        # conside using bash version 3.x (no associatives arrays in macOs yet)
    fileToGenerate="
        packageJson
        gitignore
        webpackConfigFile
    "

# ----------------------------------------------------------------------------------------------------------------
#                                                                                                  package lists
# ----------------------------------------------------------------------------------------------------------------

# /usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
# brew update
# brew doctor
# brew install node


### todo add export PATH="/usr/local/bin:$PATH" to bash profile file


    global_dependencies="
        gulp
        bower
        webpack
        webpack-dev-server
        @angular/cli
        typescript
        typings
        tslint
        foundation-cli

    "

# animate.css maybe in sass already


    dependencies="

        jquery
        lodash
        pako
        waypoints animate-sass

        material-components-web

        chart.js
        d3 dc snapsvg velocity-animate scrollmagic skrollr

        picturefill lazysizes
        phaser phaser-ce@2.9.1

        foundation-sites motion-ui
        materialize-css
        font-awesome

        @angular/common @angular/compiler @angular/core
            @angular/router @angular/forms @angular/http
            @angular/platform-browser @angular/platform-browser-dynamic
            @angular/material
            core-js rxjs ts-helpers zone.js




    "

# react
# react-dom
# @blueprintjs/core
# coffee-loader coffee-script
#
# vue
# vue-resource
# vue-router

# old : csswring postcss-cssnext postcss-custom-properties postcss-custom-selectors lost
##
#     webpack
#     webpack-dev-server
#     css-loader style-loader
#     url-loader file-loader
#     postcss-loader
#     sass-loader node-sass
#     jshint-loader jshint
#     babel-loader babel-core
#     babel-preset-es2015 babel-preset-stage-0 babel-preset-react
#     es6-promise
#     extract-text-webpack-plugin
#     html-webpack-plugin
#
#
# ??? gulp-webserver
##

# ??? gulp-svg-sprite gulp-pxtorem postcss-pxtorem
# ??? gulp-sourcemaps   already as dependency ?

# vueify
# react-qart vue-qart
# babel-preset-react

    dev_dependencies="
        gulp
            require-dir run-sequence gulp-load-plugins
            browser-sync gulp-util  gulp-size
            gulp-newer gulp-plumber del gulp-concat gulp-rename gulp-remove-empty-lines
            gulp-postcss
                precss postcss-scss
                rucksack-css autoprefixer cssnano postcss-ant postcss-animation
            gulp-sass susy
            gulp-jshint gulp-tslint
            gulp-uglify gulp-rev gulp-usemin
            gulp-svgmin gulp-svgstore gulp-svg-sprite gulp-svg2png svg4everybody
            gulp.spritesmith gulp-imagemin gulp-image
            gulp-inject gulp-cheerio gulp-modernizr
            gulp-watch
            typescript gulp-typescript
            child_process



        qartjs angular-qart


        webpack

            babel-loader babel-core
            babel-preset-es2015 babel-preset-stage-0
            es6-promise
            raw-loader

                css-loader postcss-loader style-loader  url-loader file-loader sass-loader node-sass

            html-webpack-plugin angular2-template-loader
            awesome-typescript-loader

        reflect-metadata
        minimatch
        typings

      "




# ----------------------------------------------------------------------------------------------------------------
#                                                                                              files & functions
# ----------------------------------------------------------------------------------------------------------------

    source files.content                # That way i can test different version

# ----------------------------------------------------------------------------------------------------------------
#                                                                                                  conf commands
# ----------------------------------------------------------------------------------------------------------------

# //typings init

## or use this code (decoration support added)
# {
#   "compilerOptions": {
#     "module": "commonjs",
#     "target": "es5",
#     "sourceMap": true,
#     "experimentalDecorators": true,
#     "emitDecoratorMetadata": true
#   },
#   "exclude": [
#     "node_modules"
#   ]
# }
## -------

# //

# $(npm bin)/typings search core-js
# $(npm bin)/typings install --global --save dt~core-js # set in package.json postinstall ???
