const HtmlWebpackPlugin = require('html-webpack-plugin');
const { ModuleFederationPlugin } = require('webpack').container;
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const path = require('path');

module.exports = {
  entry: './src/index',
  mode: 'development',
  devServer: {
    // contentBase: path.join(__dirname, 'src'),
    // publicPath: './',
    // static: {
    //   directory: path.join(__dirname, 'src'),
    //   publicPath: '/',
    // },
    port: 7002,
  },
  output: {
    path: path.join(__dirname, 'dist'),
    // publicPath: './',
    filename: '[name]-[hash].js',
  },
  module: {
    rules: [
      {
        test: /\.(js)x?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        options: {
          presets: ['@babel/preset-react'],
        },
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      }
    ],
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'test2',
      filename: 'test2RemoteEntry.js',
      exposes: {
        './Download': './src/download',
        './Button': './src/button',
      },
      shared: { react: { singleton: true }, 'react-dom': { singleton: true }, 'react-router-dom': { singleton: true } },
    }),
    new HtmlWebpackPlugin({
      template: './public/index.html',
      filename: 'index.html',
      inject: true,
    }),
    new CleanWebpackPlugin(),
  ],
  resolve: {
    extensions: ['.js'],
  },
};
