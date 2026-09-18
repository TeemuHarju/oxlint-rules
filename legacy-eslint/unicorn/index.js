/**
 * Unicorn rules.
 */

const unicorn = require( "eslint-plugin-unicorn" );

module.exports = [
	unicorn.configs[ "flat/recommended" ],
	{
		rules: {
			"unicorn/no-process-exit": "off",
			"unicorn/no-hex-escape": "off",
			"unicorn/catch-error-name": [ "error", { "name": "exception" } ],
			"unicorn/filename-case": "off",
			"unicorn/custom-error-definition": "error",
			"unicorn/prefer-spread": "off",
			"unicorn/prevent-abbreviations": "off",
			"unicorn/prefer-query-selector": "off",
			"unicorn/expiring-todo-comments": "off",
			"unicorn/no-nested-ternary": "off",
			"unicorn/prefer-negative-index": "off",
			"unicorn/no-null": "off",
			"unicorn/prefer-module": "off",
			"unicorn/no-this-assignment": "off",
			"unicorn/prefer-node-protocol": "off",
			"unicorn/no-static-only-class": "off",
			"unicorn/numeric-separators-style": [ "error", { "onlyIfContainsSeparator": true } ],
			"unicorn/no-typeof-undefined": "off",
			"unicorn/prefer-logical-operator-over-ternary": "off",
			"unicorn/prefer-blob-reading-methods": "off",
			"unicorn/consistent-function-scoping": "off",
			"unicorn/no-array-for-each": "off",
			"unicorn/no-negated-condition": "off",
			"unicorn/prefer-default-parameters": "off",
			"unicorn/prefer-ternary": "off",
			"unicorn/prefer-object-from-entries": "off",
			"unicorn/consistent-destructuring": "off"
		}
	}
];
