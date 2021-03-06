const { resolve } = require('path');
const devConfig = require('./dev');
const buildConfig = require('./build');
const proxy = 'http://0.0.0.0:5001';

module.exports = () => {
  const config = {
    ...devConfig,
    devServer: {
      port: 3000,
      https: false,
      host: '0.0.0.0',
      contentBase: resolve(__dirname, '../views/'),
      publicPath: '/public/js/',
      proxy: { '**': { target: proxy, secure: false } }
    }
  };

  config.output.filename = buildConfig.output.filename;

  return config;
};