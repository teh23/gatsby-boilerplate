module.exports = {
  transform: {
    '^.+\\.[jt]sx?$': `<rootDir>/jest/jest-preprocess.js`,
  },
  testRegex: '(/__tests__/.*(test|spec))\\.([tj]sx?)$',
  moduleDirectories: ['node_modules', __dirname],
  moduleNameMapper: {
    '.+\\.(css|styl|less|sass|scss)$': `identity-obj-proxy`,
    '.+\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$': `<rootDir>/jest/__mocks__/file-mock.js`,
    '^~/(.*)$': '<rootDir>/src/$1',
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  testPathIgnorePatterns: [`node_modules`, `.cache`, `public`],
  transformIgnorePatterns: [`node_modules/(?!(gatsby)/)`],
  globals: {
    __PATH_PREFIX__: ``,
  },
  setupFiles: [`<rootDir>/jest/loadershim.js`],
  setupFilesAfterEnv: ['<rootDir>/jest/setup-test-env.js'],
}
