var webpack = require('webpack');
var path = require('path');

var BUILD_DIR = path.resolve(__dirname, 'src/client/public');
var APP_DIR = path.resolve(__dirname, 'src/client/app');

var config = {
  entry: [
    APP_DIR + '/index.js',
    'babel-polyfill',
  ],
  output: {
    path: BUILD_DIR,
    filename: 'bundle.js'
  },
  module : {
    loaders : [
      {
        test : /\.jsx?/,
        include : APP_DIR,
        loader : 'babel-loader',
        query: {
          plugins: ['transform-runtime']
        }
      }
    ]
  }

};



module.exports = config;
// module: {
//   loaders: [
//     {
//       loader: "babel-loader",
//
//       // Skip any files outside of your project's `src` directory
//       include: [
//         path.resolve(__dirname, "src"),
//       ],
//
//       // Only run `.js` and `.jsx` files through Babel
//       test: /\.jsx?$/,
//
//       // Options to configure babel with
//       query: {
//         plugins: ['transform-runtime'],
//         presets: ['es2015', 'stage-0', 'react'],
//       }
//     },
//   ]
// }
