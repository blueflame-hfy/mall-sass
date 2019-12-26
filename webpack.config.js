const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const path=require('path')
module.exports = {
    mode:"production",
    entry: './src/lib/index.js',
    output: {
      filename: 'index.js',
      library: '',
      libraryTarget: 'commonjs',
      path: path.resolve(__dirname, 'build')
    },
    plugins: [
        new CleanWebpackPlugin(),
    ],
    module: {
      rules: [
        {
          test: /\.jsx?$/,
          exclude: /(node_modules|bower_components)/,
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/react']
          }
        },
        {
          test: /\.scss$/i,
          loader: 'style-loader!css-loader?modules',
        },
      ],
    },
  };