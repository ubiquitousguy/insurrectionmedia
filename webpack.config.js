module.exports = {
  //entry point is where webpack starts compiling the bundle file, first file which webpack looks for which modules and components will be required for bundle.js
  entry: './app/app.jsx',
  // the output path for where the bundlejs will live
  output: {
    path: __dirname,
    filename: './public/bundle.js'
  },

  resolve: {
    root: __dirname,
    // makes exporting components with custom names
    alias: {
    },
    extensions: ['', '.js', '.jsx']
  },
  module: {
    loaders: [
      {
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015', 'stage-0']
        },
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/
      }
    ]
  }
};
