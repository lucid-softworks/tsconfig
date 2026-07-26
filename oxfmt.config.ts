import { defineConfig } from "oxfmt";

export default defineConfig({
  printWidth: 80,
  semi: true,
  singleQuote: false,
  sortImports: true,
  ignorePatterns: [
    "coverage/**",
    "node_modules/**",
    "CHANGELOG.md",
    "pnpm-lock.yaml",
  ],
});
