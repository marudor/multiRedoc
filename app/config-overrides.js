module.exports = function override(config, env) {
  config.resolve.fallback = {
    fs: false,
    path: false,
  };
  return config;
};
