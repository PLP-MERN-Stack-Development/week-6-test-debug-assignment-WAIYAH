module.exports = {
  projects: [

    // Client-side tests configuration
    {
      displayName: 'client',
      testMatch: ['<rootDir>/client/src/**/*.test.{ts,tsx}'],
      preset: 'ts-jest',
      testEnvironment: 'jsdom',
      setupFilesAfterEnv: ['<rootDir>/client/src/setupTests.ts'],
      moduleNameMapping: {
        '\\.(css|less|scss|sass)$': 'identity-obj-proxy',
      },
      transform: {
        '^.+\\.tsx?$': 'ts-jest',
      },
      collectCoverageFrom: [
        'client/src/**/*.{ts,tsx}',
        '!client/src/**/*.d.ts',
        '!client/src/main.tsx',
        '!client/src/vite-env.d.ts',
      ],
      coverageDirectory: 'coverage/client',
    },

    // Server-side tests configuration
    {
      displayName: 'server',
      testMatch: ['<rootDir>/server/tests/**/*.test.js'],
      testEnvironment: 'node',
      setupFilesAfterEnv: ['<rootDir>/server/tests/setup.js'],
      collectCoverageFrom: [
        'server/**/*.js',
        '!server/node_modules/**',
        '!server/coverage/**',
        '!server/jest.config.js',
        '!server/tests/setup.js',
      ],
      coverageDirectory: 'coverage/server',
    },
  ],

  // Global Jest configuration
  verbose: true,
  // Enable verbose output for better debugging
  testTimeout: 30000, // Set a timeout for tests
  
  collectCoverageFrom: [
    'client/src/**/*.{ts,tsx}',
    'server/**/*.js',
    '!**/node_modules/**',
    '!**/coverage/**',
    '!**/*.config.js',
  ],
  coverageDirectory: 'coverage',
  coverageReporters: ['text', 'lcov', 'html'],
  coverageThreshold: {
    global: {
      branches: 80,
      functions: 80,
      lines: 80,
      statements: 80,
    },
  },
};