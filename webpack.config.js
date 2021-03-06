const webpack = require('webpack');

module.exports = {
  entry: './main.js',
  output: {
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          {loader: 'style-loader'},
          {loader: 'css-loader'}
        ]
      }
    ]
  },
  plugins: [
  ],
  resolve: {
    alias: {
      'ol-geocoder': 'ol-geocoder/dist/ol-geocoder-debug',
    },
  },
};
