const redirects = require('./config/redirects');

module.exports = {
  trailingSlash: true, // Adiciona "/" ao final de todas as urls
  async redirects() {
    return redirects;
  },
};
