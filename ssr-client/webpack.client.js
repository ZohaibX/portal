const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

//! .babelrc file is a necessary file for this

const dev = process.env.NODE_ENV !== "production";

module.exports = {
  // Tell webpack , the route file of server side
  entry: './src/client/client.jsx',

  // tell webpack, where to put the output file
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'public'),
  },

  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx', '.json' , '.css' , '.scss'],
  },

  
  plugins: [new MiniCssExtractPlugin()],

  mode: dev ? "development" : "production",

  // tell webpack, to apply babel on every file, it runs through
  module: {
    rules: [
      {
        test: /\.(ts|js)x?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          presets: ['@babel/react']
        }
      },
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader ,  "css-loader" ],
      },
      {
        test: /\.(png|jpe?g|gif|jp2|webp)$/,
        loader: 'file-loader',
        options: {
          name: '[name].[ext]',
        },
      },
      // {
      //   test: /\.(jpg|png|svg)$/,
      //   loader: 'url-loader',
      //   options: {
      //     limit: 25000,
      //   },
      // },
      // {
      //     test: /\.(jpg|png|svg)$/,
      //     loader: 'file-loader',
      //     options: {
      //       name: '[path][name].[hash].[ext]',
      //     },
      // },
    ],
  },
};
