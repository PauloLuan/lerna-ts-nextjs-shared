// eslint-disable-next-line @typescript-eslint/no-var-requires
const withPWA = require('next-pwa')
const withTM = require('next-transpile-modules')

const isProduction = process.env.NODE_ENV === 'production'

module.exports = withPWA(
  {
    pwa: {
      dest: 'public',
      disable: !isProduction
    }
  },
  withTM({
    transpileModules: ['@pauloluan/shared']
  })
)
