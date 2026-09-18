/**
 * Default options for ESLint.
 *
 * https://eslint.org/docs/latest/rules/
 * https://typescript-eslint.io/rules/
 */

const js = require( "@eslint/js" );
const tseslint = require( "typescript-eslint" );

module.exports = [
	js.configs.recommended,
	...tseslint.configs.recommended,
	{
		rules: {
			"@typescript-eslint/no-loss-of-precision": "error",
			"@typescript-eslint/no-shadow": "error",

			// https://git.motivesys.com/style/eslint-rules/-/issues/4
			"@typescript-eslint/no-unused-vars": [ "error", {
				"argsIgnorePattern": "^_",
				"varsIgnorePattern": "^_",
				"caughtErrorsIgnorePattern": "^_"
			} ],

			"@typescript-eslint/prefer-for-of": "off",
			"@typescript-eslint/require-await": "off",

			// It is recommended to use tsconfig's noImplicitReturns option rather than this rule
			// https://typescript-eslint.io/rules/consistent-return/
			"@typescript-eslint/consistent-return": "off",

			"no-warning-comments": "warn",

			"new-cap": "off",
			"no-unused-vars": "off",
			"require-await": "off",

			// This rule is also disabled in the formatting/index.js file.
			"consistent-return": "off",

			// https://git.motivesys.com/style/eslint-rules/-/issues/2
			"no-implicit-coercion": [ "error", {
				"allow": [ "!!" ]
			} ]
		}
	}
];
