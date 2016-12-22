module.exports = {
  entry: "./webpack/entry.js",
  output: {
    path: "src/assets/scripts/",
    filename: "bundle.js"
  },
  devtool: "source-map",
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules)/,
        loader: 'babel',
        query: {
          presets: ['react', 'es2015']
        }
      },
      {
        test: /\.json$/,
        exclude: /node_modules/,
        loader: 'json-loader'
      }
    ]
  }
};
