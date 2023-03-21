const path = require("path");
const CompressionPlugin = require("compression-webpack-plugin");
module.exports = {
  entry: {
    accordion: "./src/accordion.tsx",
    index: "./src/index.tsx",
  },
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "dist"),
  },
  resolve: {
    extensions: [".tsx", ".js"],
  },
  module: {
    rules: [
      {
        test: /\.tsx$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
    ],
  },
  plugins: [
    new CompressionPlugin({
      test: /\.(js|css|html|svg|tsx)$/,
      filename: "[path][base].gz",
      algorithm: "gzip",
      threshold: 10240,
      minRatio: 0.8,
    }),
  ],
};
