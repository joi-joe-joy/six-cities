const path = require(`path`);

module.exports = {
  entry: `./src/index.tsx`,
  output: {
    filename: `bundle.js`,
    path: path.join(__dirname, `public`)
  },
  devServer: {
    contentBase: path.join(__dirname, `public`),
    open: false,
    port: 1337,
    historyApiFallback: true
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: `babel-loader`,
        },
      },
      {
        test: /\.(tsx|ts)?$/,
        loader: `ts-loader`
      },
      {
        test: /\.(png|jp(e*)g|gif)$/,
        use: [
          {
            loader: `file-loader`,
            options: {
              name: `images/[hash]-[name].[ext]`,
            },
          },
        ],
      },
      {
        test: /\.svg$/,
        use: [`@svgr/webpack`],
      }
    ],
  },
  devtool: `source-map`,
  resolve: {
    extensions: [`.ts`, `.tsx`, `.js`, `json`],
  },
};
