const path = require('path')
const webpack = require('webpack')
const nodeExternals = require('webpack-node-externals')

module.exports = {
  entry: './server/index.tsx',
  target: 'node',
  externals: [nodeExternals()],
  output: {
    path: path.resolve('server-build'),
    filename: 'index.js',
    clean: true,
  },
  plugins: [
    new webpack.ProvidePlugin({
      React: 'react',
    }),
  ],
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        exclude: path.resolve(__dirname, 'node_modules'),
        use: 'ts-loader',
      },
      {
        test: /.(png|jpeg|gif|svg)$/,
        type: 'asset/resource',
      },
      {
        test: /.css$/,
        use: [
          { loader: 'style-loader' },
          { loader: 'css-loader', options: { modules: true } },
        ],
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
}
