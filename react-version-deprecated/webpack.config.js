/* eslint-env node */
var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: {
    app: [
      'webpack/hot/dev-server',
      'webpack-dev-server/client?http://localhost:9090',
      path.resolve(__dirname, 'app/client.jsx')
    ],
    vendor: [
      'react', 'redux', 'immutable', 'react-dom',
      'react-redux', 'react-router', 'react-router-redux',
      'redux-api-middleware'
    ]
  },
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js'
  },
  progress: true,
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.CommonsChunkPlugin('vendor', 'vendor.js')
  ],
  module: {
    loaders: [
      {
        test: /\.jsx$/,
        exclude: /node_modules/,
        loaders: ['babel-loader']
      },
      {
        test: /\.js$/,
        exclude: path.join(__dirname, 'node_modules'),
        loaders: ['babel-loader']
      },
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader?modules&importLoaders=1'
      }
    ]
  },
  resplve: {
    extensions: ['', '.js', '.jsx']
  }
};
