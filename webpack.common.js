const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    script: "./src/index.js",
    vendor: "./src/vendor.js"
  },
  plugins: [
    new HtmlWebpackPlugin({
      scriptLoading: "blocking",
      template: path.resolve(__dirname, 'src', 'index.html'),
    })
  ],
  output: {
    assetModuleFilename: 'assets/[name][ext]'
  },
  module: {
    rules:[
      {
        test: /\.html$/,
        use: {
          loader: 'html-loader',
        }
      }
    ]
  }
}
