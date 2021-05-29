// eslint-disable-next-line @typescript-eslint/no-var-requires
const withTM = require('next-transpile-modules')(['@pauloluan/shared'], {
  debug: true,
  future: {
    webpack5: true
  }
})

module.exports = withTM({
  webpack: (config, options) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      // Will make webpack look for these modules in parent directories
      '@pauloluan/shared': require.resolve('@pauloluan/shared')
      // ...
    }
    return config
  }
})
