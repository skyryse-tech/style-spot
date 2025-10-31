const nodeExternals = require('webpack-node-externals');

module.exports = function (options, webpack) {
  return {
    ...options,
    externals: [
      nodeExternals({
        allowlist: ['webpack/hot/poll?100'],
      }),
    ],
    resolve: {
      ...options.resolve,
      fallback: {
        fs: false,
        path: false,
        crypto: false,
      },
    },
  };
};
