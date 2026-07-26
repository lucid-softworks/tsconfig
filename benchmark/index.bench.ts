import { bench } from "vitest";

import baseConfig from "../base.json" with { type: "json" };
import testConfig from "../test.json" with { type: "json" };
import webConfig from "../web.json" with { type: "json" };

const options =
  process.env.VITEST_BENCHMARK_SMOKE === "1"
    ? {
        iterations: 1,
        time: 1,
        warmupIterations: 1,
        warmupTime: 1,
      }
    : {};

bench(
  "@lucid-softworks/tsconfig: serialize config presets",
  () => {
    JSON.stringify([baseConfig, testConfig, webConfig]);
  },
  options,
);
