const path = require('path');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
module.exports = {
  mode: 'production',
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'), // string
    filename: 'bundle.min.js', // string
  },

  // optimization: {
  //   minimize: true,
  //   minimizer: [
  //     new UglifyJsPlugin({
  //       sourceMap: true,
  //       include: /\.min\.js$/,
  //     }),
  //   ],
  // },

  devtool: 'source-map',
  context: __dirname,

  target: 'web',
  plugins: [new CleanWebpackPlugin()],
};
