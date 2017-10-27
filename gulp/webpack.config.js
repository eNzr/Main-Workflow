/* *****************************
 *  Author:         eNzr
 *  Company:        Mevines
 *  Description:    Webpack Main workflow Config File
 *  Version:        1.0.0
 *
 *  Notes
 *
 *  Please USE
 *      .SASS for managing sass files from webpack
 *      .SCSS for managing sass files from gulp

webpack-validator
extract-text-webpack-plugin
webpack-config-utils

 * ****************************** */

// var webpack = require('webpack');
var path = require('path');

const TEST              = process.env.NODE_ENV === 'test';
// const DEVELOPMENT      = process.env.NODE_ENV === 'development';
// const PROD             = process.env.NODE_ENV === 'production';

const PROD = false;

const PRJ = 'es2015';
const CSS = 'css';
const JsParams = {
    es2015:     { loaders: 'babel-loader',              query: { presets: ['es2015' , 'stage-0'] } },
    react:      { loaders: ['babel-loader'],            query: { presets: ['react', 'es2015' , 'stage-0'] } },
    typescript: { loaders: 'awesome-typescript-loader', query: { presets: ['es2015' , 'stage-0'] } },
    babel:      { loaders: ['babel'] },
    css:        { loaders: ['style-loader', 'css-loader', 'postcss-loader', 'sass-loader'] },
    sass:       { loaders: ['style-loader', 'css-loader',  'sass-loader'] }
};
const PrjRoot = '../';

function here(d) {
    if (!d) { return __dirname;
    } else  { return path.resolve(__dirname, d);
    }
}



var config =  {

    entry: {
        app: "../_src/assets/js/app.js",
        vendors: [
            "jQuery",
            "../_src/assets/js/vendors.js"],
    },
    context: here(),
    output: {
        path: here(),
        pathinfo: true,
        filename: "../_dist/assets/js/[name].js"
    },
    externals: {
        "jquery": "jQuery"
    },
    devtool: 'source-map',

    module: {

        loaders: [
            {
                test: /\.(js|jsx)$/,
                exclude: /(node_modules|bower_components|spec|e2e)/,
                loader: JsParams[PRJ].loaders
            },
            {
                test: /\.(css|scss|sass)$/,
                loader: JsParams['sass'].loaders
            }

        ]
    }


};

if (TEST) {
    // config.entry = controllerSpec.js
    // config.context = here ('test')
}

module.exports = config;

/*

plugins: [
'postcss-import': {},
    'postcss-cssnext': {},
    'cssnano': {}
        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery"
        })
    ],

exclude: /(node_modules|bower_components|spec|e2e)/,

context:
        here(PrjRoot + '_src/assets/'),

,






module: {
        loaders: [
            { test: /\.css$/, loader: "style-loader!css-loader" }
        ]
    }



path: "./_dist/assets/js/",
filename: "[name].js"
*/

/*
output: {
        path: here(PrjRoot + '_dist/assets/js'),
        filename: "[name].js"
    },
 */
