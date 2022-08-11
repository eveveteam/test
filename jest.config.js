export default {
  testEnvironment: 'jest-environment-jsdom',
  setupFiles: ['./jest.setup.js'],
  transform: {
    '^.+\\.(js|jsx)$': 'babel-jest',
    '^.+\\.svg$': '<rootDir>/test/__mocks__/fileMock.js',
  },
  moduleNameMapper: {
    '^.+\\.(css|less|sass|scss)$': 'identity-obj-proxy',
  },
  transformIgnorePatterns: ['node_modules/(?!variables/.*)'],
};
