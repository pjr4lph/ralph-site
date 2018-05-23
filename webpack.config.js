const path = require('path');

module.exports = {
  entry: './client/index.js',
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /.(js|jsx)$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015', 'react']
        }
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        loaders: ['style-loader', 'css-loader']
      },
      {
        test: /\.(jpg|png|gif|svg|pdf|ico)$/,
          use: [
              {
                loader: 'file-loader',
                options: {
                name: '[path][name]-[hash:8].[ext]'
                   },
          }]
       },
      {
      test: /\.(pdf|jpg|png|gif|svg|ico)$/,
      use: [
          {
            loader: 'url-loader'
          }
        ]
    }]
  },
  resolve: {
    extensions: ['.js', '.jsx', '.css'],
    modules: [__dirname, 'node_modules']
  }
}
