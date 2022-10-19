module.exports = {
  verbose: true,
  clearMocks: true,
  moduleDirectories: ['node_modules', 'src'],
  globals: {
    'ts-jest': {
        tsconfig: 'tsconfig.json',
    },
  },
  transform: {
    "^.+\\.(ts|tsx)$": "ts-jest"
  },
  transformIgnorePatterns: [
    "<rootDir>/node_modules/(?!@foo)"
  ]
};