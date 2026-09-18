# oxlint-rules

A small TypeScript project for writing personal Oxlint rules and sharing them
across repositories.

## Structure

```text
src/
  index.ts                  Plugin entry point
  rules/                    Rule implementations
test/
  rules/                    RuleTester suites
legacy-eslint/              Temporary copy of the old ESLint package
```

`no-todo-comments` is a small example rule. Copy its implementation and test
when starting a new rule, then register the new rule in `src/index.ts`.
Tests can import source files through the `@/*` alias instead of deep relative
paths; for example, `@/rules/my-rule.js` resolves to `src/rules/my-rule.ts`.

## Development

```sh
pnpm install
pnpm check
```

Individual commands:

```sh
pnpm lint
pnpm format
pnpm format:check
pnpm test
pnpm typecheck
pnpm build
```

Oxfmt formats the project with tabs displayed at a width of four columns.
Zed uses the project-local Oxfmt language server and formats supported files on
save through `.zed/settings.json`. Install the official Oxc extension in Zed
for this integration.

## Use from another repository

After publishing this package (or installing it from GitHub), add it to a
project and register it in `oxlint.config.ts`:

```ts
import { defineConfig } from "oxlint";

export default defineConfig({
	jsPlugins: [
		{
			name: "teemu",
			specifier: "oxlint-rules",
		},
	],
	rules: {
		"teemu/no-todo-comments": "error",
	},
});
```

Before publishing to npm, change the `name` in `package.json` if
`oxlint-rules` is unavailable. A scoped name such as
`@your-npm-name/oxlint-rules` is usually easiest; use that same package name as
the `specifier` above.

## Adding a rule

1. Add `src/rules/my-rule.ts` and export a rule created with `defineRule`.
2. Add `test/rules/my-rule.test.ts` and test it with `RuleTester`.
3. Import the rule in `src/index.ts` and add it to the `rules` object.
4. Run `pnpm check`.

The project structure follows the current Oxlint plugin and RuleTester APIs.
The two referenced repositories are useful examples, but no rules from either
repository are copied into this package.

The `legacy-eslint` directory is excluded from formatting and build inputs. Copy
the complete old ESLint package there, including its tests, and migrate one rule
at a time into `src/rules` with its corresponding test in `test/rules`.
