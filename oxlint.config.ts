import { defineConfig } from "oxlint";

export default defineConfig({
  categories: {
    correctness: "error",
    suspicious: "error",
    perf: "error",
  },
  plugins: ["import", "oxc", "typescript", "unicorn", "vitest"],
  env: {
    es6: true,
    node: true,
  },
  ignorePatterns: ["coverage/**", "node_modules/**"],
  options: {
    denyWarnings: true,
    reportUnusedDisableDirectives: "error",
  },
  overrides: [
    {
      files: ["**/*.test.ts"],
      env: {
        vitest: true,
      },
    },
  ],
  rules: {
    eqeqeq: "error",
    "no-console": "error",
  },
});
