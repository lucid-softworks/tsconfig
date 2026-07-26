# `@lucid-softworks/tsconfig`

The shared strict TypeScript baseline for Lucid Softworks packages.

```json
{
  "extends": "@lucid-softworks/tsconfig/base.json"
}
```

Test projects can extend `@lucid-softworks/tsconfig/test.json` for Vitest's
browser-compatible timer and event types. Production builds should extend the
platform-neutral `base.json`, or `@lucid-softworks/tsconfig/web.json` when
their public API uses Fetch, URL, streams, and other Web Platform types.
