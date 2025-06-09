module.exports = {
  verbose: true,
  clearMocks: true,
  moduleDirectories: ['node_modules'],
  roots: ["<rootDir>/src"],
  transform: {
    "^.+\\.(ts|tsx)$": ["ts-jest", { tsconfig: "tsconfig.json" }]
  },
  transformIgnorePatterns: [
    "<rootDir>/node_modules/(?!@foo)"
  ],
  testEnvironment: "jsdom",
  testMatch: [
    "**/__tests__/**/*.test.ts",
  ],
};
