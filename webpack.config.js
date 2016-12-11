const path = require('path')

module.exports = {
  context: __dirname,
  entry: './app/ClientApp.js',
  devtool: 'cheap-module-source-map',
  output: {
    path: path.join(__dirname, '/public/'),
    publicPath: '/public/',
    filename: 'bundle.js'
  },

  resolve: {
    // alias: {
    //   react: 'preact-compat',
    //   'react-dom': 'preact-compat'
    // },
    extensions: ['.js', '.jsx', '.json']
  },
  stats: {
    colors: true,
    reasons: true,
    chunks: false
  },
  devServer: {
    publicPath: '/public/',
    historyApiFallback: true
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              url: false
            }
          }
        ]
      },
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['es2015']
        }
      },
      {
        test: /\.json$/,
        loader: 'json-loader'
      },
      {
      test: /\.html$/,
      loader: 'html-loader?attrs[]=video:src'
      },
      {
      test: /\.mp4$/,
      loader: 'url?limit=10000&mimetype=video/mp4'
      }
    ]
  }
}
