const path = require('path')
const resolve = pathname => path.resolve(__dirname, pathname)
const CracoLessPlugin = require('craco-less')

module.exports = {
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: { '@primary-color': '#1DA57A' },
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
  webpack: {
    alias: {
      '@': resolve('src'),
      assets: resolve('src/assets'),
      atom: resolve('src/atom'),
      components: resolve('src/components'),
      hooks: resolve('src/hooks'),
      model: resolve('src/model'),
      pages: resolve('src/pages'),
      router: resolve('src/router'),
      services: resolve('src/services'),
      utils: resolve('src/utils'),
    },
  },
}
