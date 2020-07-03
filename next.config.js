const { resolve } = require('path');

const nextConfig = {
  webpack: config => {
    // src ディレクトリをエイリアスのルートに設定
    config.resolve.alias['~'] = resolve(__dirname, 'src');

    config.module.rules.push({
      enforce: 'pre',
      test: /\.(ts|tsx)$/,
      loader: 'eslint-loader',
      exclude: /(node_modules)/,
      options: {
        fix: true,
        failOnWarning: true
      }
    });

    return config;
  }
};

module.exports = nextConfig;
