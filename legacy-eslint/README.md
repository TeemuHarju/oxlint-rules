# M-Files ESLint rules

This NPM package provides basic common rules for M-Files projects. You can read more about the reasoning why these rules were selected from [PDWiki](https://pdwiki.m-files.com/wiki/VNext-eslint-rules).

This package targets **ESLint 9** and uses the [flat configuration file syntax](https://eslint.org/docs/latest/use/configure/configuration-files). For projects still on ESLint 8 with `.eslintrc.*` configs, pin `@m-files/eslint-config-common-rules@^2`.

This package provides a `recommended` config, designed to maintain high standards of code quality and consistency. Using this config is advised for most projects.

The `node` and `react` configs are also available but optional. These can be added to support best practices specifically for Node.js and React projects, respectively.

## How to use

- Make sure you have M-Files NPM mirror configured in your project and in your development enviroment so you can use `@m-files` scoped packages. Check the tutorial at the end of this documentation to make sure: [Setup development environment to work with M-Files scoped NPM packages](#setup-development-environment-to-work-with-m-files-scoped-npm-packages)

### If you don't yet have existing ESLint configuration

- Install ESLint 9:
  - `npm install --save-dev eslint@^9.0.0`
  - Use the flat configuration file: [Getting Started with ESLint](https://eslint.org/docs/latest/use/getting-started)
  - You can refer to this example for configuration: [eslint.config.js](./examples/eslint.config.js)
- `npm i --save-dev @m-files/eslint-config-common-rules`

### If you already have ESLint configuration in the project

- `npm uninstall` all the ESLint plugin packages that you are about to replace with common rules
  - After this step you need to remove `package-lock.json` and `node_modules` folder and then run `npm i`. This makes sure that all included packages with this repository are installed correctly and NPM won't try to load them directly from your projects' `node_modules` folder.
- `npm i --save-dev @m-files/eslint-config-common-rules`
- Remove your `parser` and `parserOptions` settings — they are provided by the `parser-options` config from this package (included in `recommended`)
- In your `eslint.config.js`, import this package and spread the configs you want:

```js
const mfRules = require("@m-files/eslint-config-common-rules");

module.exports = [
  ...mfRules.configs.recommended,
  ...mfRules.configs.node,   // optional
  ...mfRules.configs.react,  // optional
  // ...rest of your config
];
```

This package provides the following rule sets as its dependencies:

- `@typescript-eslint/eslint-plugin`
- `@typescript-eslint/parser`
- `eslint-plugin-jsdoc`
- `eslint-plugin-n`
- `eslint-plugin-react`
- `eslint-plugin-react-hooks`
- `eslint-plugin-security`
- `eslint-plugin-sonarjs`
- `eslint-plugin-unicorn`
- `typescript-eslint`

If you already have these as devDependencies in your project, these can now be removed.

### Create a script for runnin ESLint into package.json

```json
"scripts": {
  "lint": "eslint .",
},
```

Now you can run the linter with the command `npm run lint`.

You can also create a script for autofix linting issues when possible:

```json
"lint:fix": "eslint . --fix",
```

## The configs

### [recommended](./recommended/index.js)

This config includes all of:

- `parser-options`
- `common-rules`
- `formatting`
- `jsdoc`
- `sonar`
- `unicorn`

### [parser-options](./parser-options/index.js)

This config sets the recommended parser (`@typescript-eslint/parser`) and default `languageOptions`. Already included in `recommended`. Spread it on its own only if you want parser setup without the rule sets.

### [common-rules](./common-rules/index.js)

These are the base rules for JavaScript and TypeScript projects.

To use additional configs provided by this package, spread them into your `eslint.config.js` array.

### [formatting](./formatting/index.js)

Formatting rules as they are set in vNext project. If you plan to use these rules and you are already using some other formatter like Prettier, please uninstall that formatter to avoid conflicts.

### [jsdock](./jsdoc/index.js)

JSDoc rules as they are set in vNext project.

### [node](./node/index.js)

Basic rule set for Node projects and configuration files. This set also includes [eslint-plugin-security](https://www.npmjs.com/package/eslint-plugin-security) ESLint plugin.

**Note!** You need to define the Node version in your package.lock configuration:

```json
"engines": {
  "node": ">=18.0.0" // Make sure this matches your actual Node version that you are using
},
```

### [react](./react/index.js)

This rule set provides the basic rules for React projects.

### [sonar](./sonar/index.js)

SonarJS rules for ESLint to help developers produce Clean Code by detecting bugs and suspicious patterns.

[eslint-plugin-sonarjs](https://www.npmjs.com/package/eslint-plugin-sonarjs)

### [unicorn](./unicorn/index.js)

"More than 100 powerful ESLint rules". This rule set provides some nice suggestions for improving code quality and readability.

[eslint-plugin-unicorn](https://github.com/sindresorhus/eslint-plugin-unicorn)

## Overwriting rules

You can override these rules as needed by appending a config object to your `eslint.config.js` array.

Example of disabling a rule globally:

```js
const mfRules = require("@m-files/eslint-config-common-rules");

module.exports = [
  ...mfRules.configs.recommended,
  {
    rules: {
      "@typescript-eslint/no-explicit-any": "off"
      // More rules...
    }
  }
];
```

Example of applying overrides to specific files only — use the `files` glob:

```js
module.exports = [
  ...mfRules.configs.recommended,
  {
    files: ["./path/*.js", "./some/other/path/file.js"],
    rules: {
      "n/no-deprecated-api": "off"
      // More rules...
    }
  }
];
```

## Developing M-Files ESLint rules

- Save your changes
- Make the project runnable as global package: `npm link`
- Uninstall `@m-files/eslint-config-common-rules` from target repo if you already have it installed
- Run: `npm link @m-files/eslint-config-common-rules` in target repo. This symlinks ESLint rule NPM package to target projects `node_modules` folder. This only needs to be run once
- After this, every time you run `npm link` in M-Files ESLint rules project, the latest version is ready to use in the target project.
- Cleanup:
  - Run `npm unlink @m-files/eslint-config-common-rules` in target repo
  - `npm rm --global @m-files/eslint-config-common-rules`

## Scripts

### Scripts for linting this project

These scripts can help you when testing rule modifications.

`npm run lint` – Lint this repository files excluding the files in `tests` folder
`npm run lint:fix` – Fix auto-fixable errors

### Scripts for testing rules applied for other repositories

`npm run lint:tests` – Lint the intentional-violation fixtures in the `tests` folder to inspect what rules fire
`npm run lint:tests:fix` – Fix auto-fixable errors
`npm test` – Run the automated integration test suite (vitest) and compare against committed snapshots

## Testing linter rules

- Fixture files with intentional linting errors live in the `tests` folder
- The fixture-linting config is at [tests/eslint.config.js](./tests/eslint.config.js). It spreads `recommended`, `node`, and `react`. Adjust if you want to scope which configs are applied to the fixtures.
- For automated regression checking, [tests/integration/eslint.integration.test.js](./tests/integration/eslint.integration.test.js) runs ESLint against the fixtures programmatically and asserts the violation list matches the committed snapshot. Run via `npm test`.
- If you change rules and the snapshot diff is intentional, update with `npx vitest run -u` and commit the snapshot change alongside your rule change.

## Publishing M-Files ESLint rules as a NPM package

- Run command to update the version number in `package.json` after making changes and also remember to follow [semantic versioning](https://semver.org):
  - `npm version <new-version-number>`
- Update the [CHANGELOG.md](./CHANGELOG.md)
- Push your changes
- The project now builds automatically in GitLab pipeline
- Run `publish` pipeline job to publish the new NPM package version


## Proposing new rules or changes into Eslint NPM package

To propose new rules or changes to current rules, create issue into gitlab repository with reasoning and examples.
See old issues as example.


## Setup development environment to work with M-Files scoped NPM packages

To use NPM packageges that are in M-Files scope (names starting with `@m-files/`) you need to add some configuration to you repository and to your personal development environment.

### Set up NPM to connect M-Files package repository

- Create `.npmrc` file to root of your repository and add following content there:

```
; Load @m-files scoped packages from M-Files registry
@m-files:registry=https://m-files.pkgs.visualstudio.com/_packaging/Mirror/npm/registry/

always-auth=true

; begin auth token 
//m-files.pkgs.visualstudio.com/_packaging/Mirror/npm/registry/:username=m-files
//m-files.pkgs.visualstudio.com/_packaging/Mirror/npm/registry/:_password=${NPM_READ_TOKEN}
//m-files.pkgs.visualstudio.com/_packaging/Mirror/npm/registry/:email=npm requires email to be set but doesn't use the value
//m-files.pkgs.visualstudio.com/_packaging/Mirror/npm/:username=m-files 
//m-files.pkgs.visualstudio.com/_packaging/Mirror/npm/:_password=${NPM_READ_TOKEN}
//m-files.pkgs.visualstudio.com/_packaging/Mirror/npm/:email=npm requires email to be set but doesn't use the value
; end auth token
```

### Set up NPM_READ_TOKEN environment variable

- Remove old `.npmrc` file from your home folder `c:\users\my.name`
- Install vsts-npm-auth: `npm i -g vsts-npm-auth`
- generate new `.npmrc` file while you are in your **project folder**:
	- `vsts-npm-auth -config .npmrc`
- Copy password from **home folder** `.npmrc` file
- Setup NPM_READ_TOKEN environment variable
	- `$Env:NPM_READ_TOKEN = "<Password>"`
	- Check that env variable is set (in Powershell): `$env:NPM_READ_TOKEN`


## Known issues

### Error: Failed to load plugin 'eslint-plugin-x'

`Error: Failed to load plugin 'eslint-plugin-x' declared in '.eslintrc.json » @m-files/eslint-config-common-rules/xxx': Cannot find module 'eslint-plugin-x'`

This might indicate that you removed dependency from your project but did not regenerate `package-lock.json`.

Fix: Remove `package-lock.json` and `node_modules` folder. Run `npm i`. You might also need to add the legacy-peer-deps parameter: `npm i --legacy-peer-deps`.

### Error: Cannot find module x

```
Error: Cannot find module 'ajv/dist/compile/codegen'
```

This problem arose in vNext. This probably happens because of the versions of `babel-loader` and `eslint` we are currently using.

Similar issue: https://github.com/ajv-validator/ajv-keywords/issues/385

To bypass this issue the following development time dependencies were added to vNext:

```
ajv@6.12.6
ajv-keywords@3.5.2
schema-utils@3.3.0
```

It would be more clear to patch this issue by using [NPM overrides](https://docs.npmjs.com/cli/v9/configuring-npm/package-json#overrides) functionality but the `overrides` are only supported starting from npm 8.3 and forward and we are using version 8.1 as of writing of this.

Issue: [V-106851](https://m-files.visualstudio.com/Product%20M-Files/_workitems/edit/106851)