// For a detailed explanation regarding each configuration property, visit:
// https://jestjs.io/docs/en/configuration.html

module.exports = {
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
    '.(ts|tsx)': '<rootDir>/node_modules/ts-jest/preprocessor.js'
  },

  setupFilesAfterEnv: ['./setupTests.ts'],
  snapshotSerializers: ['enzyme-to-json/serializer'],
  collectCoverageFrom: ['packages/*/src/**/*.{js,jsx,ts,tsx}']
}
