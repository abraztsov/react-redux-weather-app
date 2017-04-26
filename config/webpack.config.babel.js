import webpack from 'webpack';
import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import ExtractTextPlugin from 'extract-text-webpack-plugin';

export default () => {
  return {
    entry: {
      app: ['babel-polyfill', path.resolve('src')]
    },
    output: {
      chunkFilename: 'js/[name].[chunkhash].js',
      filename: 'js/[name].[chunkhash].js',
      path: path.resolve('public'),
      publicPath: '/'
    },
    module: {
      rules: [{
        test: /\.jsx?$/,
        include: path.resolve('src'),
        use: {
          loader: 'babel-loader',
          options: {
            cacheDirectory: true
          }
        }
      }, {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: 'css-loader'
        })
      }, {
        test: /\.scss$/,
        include: path.resolve('src'),
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [{
            loader: 'css-loader',
            query: {
              modules: true,
              localIdentName: '[path][name]__[local]'
            }
          }, {
            loader: 'sass-loader'
          }]
        })
      }]
    },
    resolve: {
      alias: {
        src: path.resolve('src'),
        app: path.resolve('src/app/modules/app'),
        error: path.resolve('src/app/modules/error'),
        lib: path.resolve('src/lib')
      },
      extensions: ['.js', '.json', '.jsx', '.css', '.scss']
    },
    plugins: [
      new webpack.optimize.CommonsChunkPlugin({
        name: 'vendor',
        minChunks: (module) => /node_modules/.test(module.context)
      }),
      new webpack.optimize.CommonsChunkPlugin({
        name: 'manifest'
      }),
      new ExtractTextPlugin({
        filename: 'css/[name].[chunkhash].css',
        allChunks: true
      }),
      new HtmlWebpackPlugin({
        filename: 'index.html',
        template: path.resolve('src/index.html')
      })
    ],
    devtool: 'cheap-module-source-map',
    devServer: {
      contentBase: path.resolve('public'),
      publicPath: '/',
      historyApiFallback: true,
      stats: {
        assets: false,
        chunks: false,
        children: false,
        timings: true
      }
    }
  };
};
