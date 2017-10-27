var path = require('path');
var webpackConfig = require('./webpack.config');
//var entry = webpackConfig.context + webpackConfig.entry.app;
var entry = path.resolve(webpackConfig.context, webpackConfig.entry.app);
var preprocessors = {};
preprocessors['entry'] = ['webpack'];

// karma.conf.js
module.exports = function(config) {
    config.set({
        basePath: '',
        frameworks: ['jasmine'],
        files: [entry],
        exclude: [],
        preprocessors: preprocessors,
        webpack: webpackConfig,
        webpackMiddleware: { noInfo: true },
        reporters: [],
        port: 9876,
        colors: true,
        logLevel: config.LOG_INFO,
        autoWatch: true,
        browsers: ['Firefox'],
        singleRun: false,
        plugins: [
            require('karma-webpack'),
            'karma-jasmine',
            'karma-firefox-launcher'
        ]
        //...
    });
};

/*
// karma.conf.ts
module.exports = (config) => {
    config.set({
        basePath: '../..',
        frameworks: ['jasmine'],
        //...
    });
}
*/