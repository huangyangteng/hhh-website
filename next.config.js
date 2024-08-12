const path = require('path')
const withBundleAnalyzer = require('@next/bundle-analyzer')({
    enabled: process.env.ANALYZE === 'true',
})
const nextConfig = {
    assetPrefix: process.env.NEXT_PUBLIC_ASSET_PREFIX || '',
    sassOptions: {
        includePaths: [path.join(__dirname, 'styles')],
    },
    webpack: (config) => {
        config.resolve.alias.canvas = false

        return config
    },
}
module.exports = withBundleAnalyzer(nextConfig)
