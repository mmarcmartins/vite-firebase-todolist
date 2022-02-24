module.exports = {
    clearMocks: true,
    roots: ['<rootDir>/src'],
    testEnvironment: 'jsdom',    
    moduleDirectories: ['node_modules', 'src'],
    moduleFileExtensions: ['jsx', 'ts', 'tsx', 'js'],
    testRegex: '((\\.|/*.)(test))\\.tsx?$',       
    collectCoverageFrom: [
      'src/**/*.{jsx,ts,tsx}',
      '!src/**/*.style.ts',
      '!src/index.dev.ts'
    ],
    coverageThreshold: {
      global: {
        branches: 90,
        lines: 90,
        functions: 90,
        statements: 90,
      },
      './**/': {
        branches: 90,
        lines: 90,
        functions: 90,
        statements: 90,
      },
    },
    moduleNameMapper: {
      '\\.(svg)$': '<rootDir>/config/mocks/fileMock.ts',
    },
  };
  