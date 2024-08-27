// module.exports = {
//   collectCoverageFrom: [
//     "<rootDir>/components/*.{tsx}",
//     "<rootDir>/components/**/*.{tsx}",
//     // "<rootDir>/features/**/*.{ts,tsx}",
//     // "<rootDir>/app/**/*.{ts,tsx}",
//   ],
//   preset: "ts-jest",
//   testEnvironment: "jsdom",
//   experimental: {
//     esm: true,
//   },
//   setupFilesAfterEnv: ["<rootDir>/setupTests.ts"],
//   transform: {
//     "^.+\\.(ts|tsx)$": "<rootDir>node_modules/ts-jest",
//     // "^.+\\.(js|jsx)$": "babel-jest",
//     "^.+\\.(ts|tsx)?$": "ts-jest",
//     "^.+\\.(js|jsx)$": "<rootDir>/node_modules/babel-jest",
//     "^.+.(css|styl|less|scss|sass)$": "jest-transform-stub",
//     "\\.(jpg|jpeg|png|gif|webp|svg)$": "jest-transform-stub",
//   },
//   testPathIgnorePatterns: [
//     "/node_modules/",
//     "./src/features/application/*.ts",
//     "node_modules/(?!(jest-)?react|@?babel/runtime|@?babel/core-js)",
//   ],
// };

import type { Config } from '@jest/types';

const config: Config.InitialOptions = {
  watchPlugins: ['jest-watch-typeahead'],
  collectCoverageFrom: [
    '<rootDir>/components/*.{tsx}',
    '<rootDir>/components/**/*.{tsx}',
    // '<rootDir>/features/**/*.{ts,tsx}',
    // '<rootDir>/app/**/*.{ts,tsx}',
  ],
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
 
  setupFilesAfterEnv: ['<rootDir>/setupTests.ts'],
  transform: {
    '^.+\\.(ts|tsx)$': '<rootDir>/node_modules/ts-jest',
    // '^.+\\.(js|jsx)$': 'babel-jest',
    '^.+\\.(ts|tsx)?$': 'ts-jest',
    '^.+\\.(js|jsx)$': '<rootDir>/node_modules/babel-jest',
    '^.+.(css|styl|less|scss|sass)$': 'jest-transform-stub',
    '\\.(jpg|jpeg|png|gif|webp|svg)$': 'jest-transform-stub',
  },
  testPathIgnorePatterns: [
    '/node_modules/',
    './src/features/application/*.ts',
    'node_modules/(?!(jest-)?react|@?babel/runtime|@?babel/core-js)',
  ],
};

export default config;