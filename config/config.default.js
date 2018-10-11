'use strict';

module.exports = appInfo => {
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1539156896885_8975';

  // add your config here
  config.middleware = ['gzip', 'report'];
  config.gzip = {
    threshold: 1024
  };

  config.mongoose = {
    client: {
      // mongodb://user:pass@localhost:port
      url: 'mongodb://yy:123456@127.0.0.1:27017/riskmanagement',
      options: {},
    }
  };

  return config;
};
