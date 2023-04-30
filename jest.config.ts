export default {
  clearMocks: true,
  coverageProvider: "v8",
  rootDir: ".",
  testMatch: [
    "<rootDir>/tests/**/*.spec.ts"
  ],
  transform: {
    "^.+\\.(ts)$": ["@swc/jest"]
  },
  globals: {
    "ts-jest": {
      tsconfig: "tsconfig.json"
    }
  },
  moduleNameMapper: {
    '^@customer/(.*)$': '<rootDir>/src/customer/$1',
  }
};
