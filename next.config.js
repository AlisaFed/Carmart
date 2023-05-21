module.exports = {
    webpack: (config) => {
      config.module.rules.push({
        test: /\.scss$/,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader'
        ]
      });
  
      return config;
    }
  };
  