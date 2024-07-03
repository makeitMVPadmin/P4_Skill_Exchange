const path = require('path')

module.exports = {
    reactStrictMode: true,
    swcMinify: false,
    sassOptions: {
      includePaths: [path.join(__dirname, '/src/styles')],
    },
  }