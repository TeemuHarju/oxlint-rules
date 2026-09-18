/**
 * Node + security rules.
 */

const n = require( "eslint-plugin-n" );
const security = require( "eslint-plugin-security" );
const globals = require( "globals" );

module.exports = [
	n.configs[ "flat/recommended" ],
	security.configs.recommended,
	{
		languageOptions: {
			globals: {
				...globals.node
			}
		},
		rules: {
			"n/handle-callback-err": "error",
			"n/no-callback-literal": "error",
			"n/no-new-require": "error",
			"n/no-path-concat": "error",
			"n/no-process-exit": "error",

			"security/detect-unsafe-regex": "error",
			"security/detect-buffer-noassert": "error",
			"security/detect-child-process": "error",
			"security/detect-disable-mustache-escape": "error",
			"security/detect-eval-with-expression": "error",
			"security/detect-no-csrf-before-method-override": "error",
			"security/detect-non-literal-require": "error",
			"security/detect-possible-timing-attacks": "error",
			"security/detect-pseudoRandomBytes": "error",
			"security/detect-non-literal-regexp": "error",
			"security/detect-non-literal-fs-filename": "error",

			// This rule is disabled because it causes false positives
			"security/detect-object-injection": "off",

			// This rule is disabled because it causes false positives
			// https://github.com/eslint-community/eslint-plugin-n/blob/master/docs/rules/no-missing-import.md
			"n/no-missing-import": "off"
		}
	}
];
