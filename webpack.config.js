var path = require('path');
var webpack = require('webpack');
var npm = require("./package.json");

require('es6-promise').polyfill();

module.exports = {
  entry: {
    app: './src/VueSelectImage.js'
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/dist',
    filename: 'VueSelectImage.bundle.js',
    library: 'VueSelectImage',
    libraryTarget: 'umd',
    umdNamedDefine: true,
    jsonpFunction: 'WebpackJsonp'
  },
  resolve: {
    extensions: ['.js'],
    alias: {
      'vue$': 'vue/dist/vue.common.js'
    }
  },
  devtool: '#source-map',
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: path.resolve(__dirname, 'node_modules'),
        loader: 'babel-loader'
      }
    ]
  },
  externals: {
    "vue": "Vue"
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': '"production"'
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      },
      sourceMap: false
    }),
    new webpack.BannerPlugin({
      banner: `VueSelectImage v.${npm.version}\nIrfan Maulana (https://github.com/mazipan)`
    })
  ]
}
