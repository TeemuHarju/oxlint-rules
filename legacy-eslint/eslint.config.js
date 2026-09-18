/**
 * ESLint configuration for linting this project itself.
 */

const mfRules = require( "./" );

module.exports = [
	{
		ignores: [ "tests/**", "node_modules/**", "examples/**" ]
	},
	...mfRules.configs.recommended,
	...mfRules.configs.node,
	{
		rules: {
			"no-undef": "off",

			// This package is CommonJS by design. Flat-config files
			// (eslint.config.js, each ruleset's index.js) load via require().
			"@typescript-eslint/no-require-imports": "off"
		}
	}
];
