
module.exports = {
  transform: {
    '^.+\\.tsx?$': `ts-jest`,
    "^.+\\.js?$": `babel-jest`,
  },
  testRegex: `.test.(js?|jsx?|tsx?)$`,
  moduleFileExtensions: [
    `ts`,
    `tsx`,
    `js`,
    `jsx`,
    `json`,
    `node`
  ],
  setupFilesAfterEnv: [
    `<rootDir>/src/setupTests.js`
  ],
  moduleNameMapper: {
    "\\.svg": `<rootDir>/__mocks__/svgrMock.js`
  },
};
