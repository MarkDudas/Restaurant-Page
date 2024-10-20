const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true, // This ensures the dist folder is cleaned before every build
  },
  devServer: {
    static: './dist', // Ensures the dist directory is served
    hot: true, // Enables Hot Module Replacement
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/template.html', // Points to the template HTML file
    }),
  ],
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  mode: 'development',
};
