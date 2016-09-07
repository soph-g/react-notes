// our webpack.config.js file located in project root

var webpack = require('webpack');
var path = require('path');                // a useful node path helper library

var config = {
  entry: [
    // 'webpack/hot/dev-server',
    // 'webpack-dev-server/client?http://localhost:3000',
    './src/main.js'
  ],                // the entry point for our app
  resolve: {
    root: [
      // allows us to import modules as if /src was the root.
      // so I can do: import Comment from 'components/Comment'
      // instead of:  import Comment from '../components/Comment' or whatever relative path would be
      path.resolve(__dirname, './src')
    ],
    // allows you to require without the .js at end of filenames
    // import Component from 'component' vs. import Component from 'component.js'
    extensions: ['', '.js', '.json', '.jsx']
  },
  output: {
    path: path.resolve(__dirname, 'dist'), // store the bundled output in dist/bundle.js
    filename: 'bundle.js'                  // specifying file name for our compiled assets
  },
  module: {
    loaders: [
      // telling webpack which loaders we want to use.  For now just run the
      // code through the babel-loader.  'babel' is an alias for babel-loader
      { test: /\.js$/,
        // dont run node_modules or bower_components through babel loader
        loader: 'babel',
        // babel is alias for babel-loader
        // npm i babel-core babel-loader --save-dev
        exclude: /(node_modules|bower_components)/
      }
    ]
  }
};

module.exports = config;
