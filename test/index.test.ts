import { describe, expect, it } from "vitest";

import baseConfig from "../base.json" with { type: "json" };
import testConfig from "../test.json" with { type: "json" };
import webConfig from "../web.json" with { type: "json" };

describe("TypeScript configs", () => {
  it("enables the strict library policy", () => {
    expect(baseConfig.compilerOptions).toMatchObject({
      exactOptionalPropertyTypes: true,
      isolatedDeclarations: true,
      noUncheckedIndexedAccess: true,
      strict: true,
      target: "ES2022",
    });
  });

  it("keeps the production baseline platform-neutral", () => {
    expect(baseConfig.compilerOptions.lib).toEqual(["ES2022"]);
  });

  it("adds browser-compatible test globals without emitting", () => {
    expect(testConfig).toMatchObject({
      extends: "./base.json",
      compilerOptions: {
        lib: ["ES2022", "DOM", "DOM.Iterable"],
        noEmit: true,
      },
    });
  });

  it("provides Web Platform types for production libraries", () => {
    expect(webConfig).toMatchObject({
      extends: "./base.json",
      compilerOptions: {
        lib: ["ES2022", "DOM", "DOM.Iterable"],
      },
    });
  });
});
