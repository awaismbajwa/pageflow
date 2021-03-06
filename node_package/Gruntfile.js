/*global require, module*/

var webpack = require('webpack');
var webpackConfigs = require('./webpack.config.js');

webpackConfigs.forEach(function(webpackConfig) {
  webpackConfig.plugins = webpackConfig.plugins || [];
  webpackConfig.plugins.push(new webpack.DefinePlugin({
    'process.env': {
      'NODE_ENV': JSON.stringify('production')
    }
  }));
});

module.exports = function(grunt) {
  grunt.loadNpmTasks('grunt-webpack');
  grunt.loadNpmTasks('grunt-karma');

  grunt.initConfig({
    webpack: {
      options: webpackConfigs,
      build: {}
    },

    karma: {
      singleRun: {
        configFile: 'karma.conf.js',
        singleRun: true
      }
    }
  });

  grunt.registerTask('build', ['webpack:build']);
  grunt.registerTask('test', ['karma:singleRun']);

  grunt.registerTask('default', ['build', 'test']);
};
