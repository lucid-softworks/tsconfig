import { defineConfig, type ViteUserConfigExport } from "vitest/config";

const config: ViteUserConfigExport = defineConfig({
  test: {
    include: ["test/**/*.test.ts"],
    benchmark: {
      include: ["benchmark/**/*.bench.ts"],
    },
  },
});

export default config;
