# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).


## [3.0.0]

### Breaking

- Requires ESLint 9.x. Consumers must migrate their config to the flat-config format (`eslint.config.js`). For ESLint 8 projects, pin `@m-files/eslint-config-common-rules@^2`.
- Package exports a `configs` object instead of `extends`-style string paths. Update your `eslint.config.js`:

  ```js
  const mfRules = require("@m-files/eslint-config-common-rules");
  module.exports = [
    ...mfRules.configs.recommended,
    ...mfRules.configs.node,   // optional
    ...mfRules.configs.react   // optional
  ];
  ```
- Removed `recommended-legacy` plugin preset references (sonarjs, security) in favor of the flat `recommended` presets.
- ~40 core stylistic rules removed from ESLint 9 are now sourced from `@stylistic/eslint-plugin` under the `@stylistic/` prefix (e.g., `indent` → `@stylistic/indent`, `semi` → `@stylistic/semi`). Rule options are unchanged.

### Added

- `vitest`-based integration test suite ([tests/integration/](./tests/integration/)) that lints fixture files against each ruleset and snapshots the violations. Wired into the GitLab CI pipeline as a new `test` stage that blocks publish on failure.
- New dependencies: `@eslint/js`, `@stylistic/eslint-plugin`, `globals`.

### Removed

- `.eslintrc.js`, `.eslintignore`, `cross-env`, and the `ESLINT_USE_FLAT_CONFIG=false` env-var escape hatch.

### Security

- Bumped `eslint-plugin-sonarjs` 3.x → 4.0.3. The 3.x line hard-pins a vulnerable `minimatch@10.1.2` (GHSA-3ppc-4f35-3m26 ReDoS, high severity). No rule-behavior change observed against fixtures.
- Bumped `vitest` 2.x → 4.1.7 (devDependency only) to clear the transitive `esbuild` dev-server advisory (GHSA-67mh-4wv8-2f99). Does not affect consumers — vitest is not in the published dependency tree.


## [2.1.2]

### Changed 
Removed Camelcase from common-rules and swapped Camelcase only to formatting.


## [2.1.1]

### Changed

#### index.js

https://git.motivesys.com/style/eslint-rules/-/issues/2
no-implicit-coercion configuration changed to
    "allow": [ "!!" ]

https://git.motivesys.com/style/eslint-rules/-/issues/4
@typescript-eslint/no-unused-vars configuration changed to
    "argsIgnorePattern": "^_",
    "varsIgnorePattern": "^_",
    "caughtErrorsIgnorePattern": "^_"

https://git.motivesys.com/style/eslint-rules/-/issues/6
camelcase configuration changed to
    "properties": "never"


## [2.1.0]

### Added

### Changed

todo-tag changed to warn,
require-await changed to off,
consistent-return changed to off,
typescript-eslint/prefer-for-of changed to off,
typescript-eslint/require-await changed to off,
typescript-eslint/consistent-return changed to off,

jsdoc/require-jsdoc changed to
"error",
{
"publicOnly": true,
"require": {
"MethodDefinition": true,
"ClassDeclaration": true,
"FunctionDeclaration": true,
"ArrowFunctionExpression": true
}
},

jsdoc/require-param-type changed to off,
jsdoc/require-returns-type changed to off,
security/detect-object-injection changed to off,
sonarjs/cognitive-complexity changed to off,
sonarjs/todo-tag changed to off,
sonarjs/new-cap changed to off,
base new-cap changed to off,
sonarjs/no-unused-vars changed to off,
sonarjs/public-static-readonly changed to off,
unicorn/consistent-function-scoping changed to off,
unicorn/consistent-destructuring changed to off,

Add jsx-runtime plugin into extend in react.
https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/react-in-jsx-scope.md#when-not-to-use-it
https://legacy.reactjs.org/blog/2020/09/22/introducing-the-new-jsx-transform.html#removing-unused-react-imports
plugin:react/jsx-runtime


## [2.0.0]

### Added

- New rule set: `recommended` that combines most of the other rulesets to one set.
- Missing rules from vNext added
    - `handle-callback-err`
    - `no-callback-literal`
    - `no-new-require`
    - `no-path-concat`
    - `no-process-exit`

### Fixed

- Fix false positive error by disbling the rule: `n/no-missing-import`

### Changed

- Replace unsupported `eslint-plugin-node` with `eslint-plugin-n`
- Disable all rulesets by default
- Combine Node and Security rule sets
- Add common rule set as `common-rules` set
- Parser options moved to `parser-options` rule set

### Removed

## [1.1.0]

### Added

- All rule sets from vNext project

### Fixed


### Changed


### Removed
