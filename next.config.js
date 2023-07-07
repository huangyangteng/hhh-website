const path = require('path');
 console.log('🐔🐔🐔',process.env.NEXT_PUBLIC_ASSET_PREFIX)
module.exports = {
  assetPrefix: process.env.NEXT_PUBLIC_ASSET_PREFIX || '',
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
};