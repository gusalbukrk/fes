export default {
  testEnvironment: 'node',
  coverageProvider: 'v8',
  projects: [
    {
      displayName: 'jest',
      preset: 'ts-jest',
      globals: {
        'ts-jest': {
          tsconfig: './tsconfig.json',
        },
      },
      transform: {
        '^.+\\.jsx?$': 'babel-jest', // to also be able to write tests in javascript
        '^.+\\.tsx?$': 'ts-jest',
      },
      moduleNameMapper: {
        '\\.(jpg|jpeg|png|gif)$': '<rootDir>/__mocks__/fileMock.js',
        '\\.(css|s[ac]ss)$': 'identity-obj-proxy',
      },
    },
    {
      displayName: 'eslint',
      runner: 'jest-runner-eslint',
    },
  ],
  watchPlugins: ['jest-runner-eslint/watch-fix'],
};
