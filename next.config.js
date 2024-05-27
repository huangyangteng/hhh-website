const path = require("path");
module.exports = {
  assetPrefix: process.env.NEXT_PUBLIC_ASSET_PREFIX || "",
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
  },
  webpack: (config) => {
    config.resolve.alias.canvas = false;

    return config;
  },
};
