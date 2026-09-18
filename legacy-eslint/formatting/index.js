/*
 * Formatting rules.
 *
 * Core stylistic rules removed from ESLint 9 are sourced from
 * the @stylistic/eslint-plugin package under the `@stylistic/` prefix.
 */

const stylistic = require( "@stylistic/eslint-plugin" );

module.exports = [
	{
		plugins: {
			"@stylistic": stylistic
		},
		rules: {
			"@stylistic/indent": [
				"error",
				"tab",
				{
					"flatTernaryExpressions": true,
					"ArrayExpression": 1,
					"ObjectExpression": 1,
					"MemberExpression": 1,
					"SwitchCase": 1,
					"FunctionDeclaration": {
						"body": 1,
						"parameters": 2
					},
					"FunctionExpression": {
						"body": 1,
						"parameters": 2
					}
				}
			],
			"@stylistic/no-multiple-empty-lines": [
				"error",
				{ "maxBOF": 0, "max": 1 }
			],
			"no-script-url": "error",
			"no-unmodified-loop-condition": "error",
			"no-self-compare": "error",
			"no-sequences": "error",
			"no-throw-literal": "error",
			"radix": "error",
			"@stylistic/max-statements-per-line": "error",
			"@stylistic/wrap-iife": [
				"error",
				"any"
			],
			"yoda": "error",
			"@stylistic/block-spacing": "error",
			"@stylistic/object-curly-spacing": [ "error", "always" ],
			"@stylistic/array-bracket-spacing": [ "error", "always" ],
			"@stylistic/space-in-parens": [ "error", "always" ],
			"@stylistic/no-trailing-spaces": "error",
			"no-useless-escape": "error",
			"prefer-rest-params": "error",
			"@stylistic/semi": "error",
			"no-var": "error",
			"@stylistic/one-var-declaration-per-line": [ "error", "always" ],
			"eqeqeq": "error",
			"no-inner-declarations": "error",
			"no-prototype-builtins": "error",
			"prefer-const": "error",
			"@stylistic/quotes": [
				"error",
				"double",
				{
					"avoidEscape": true
				}
			],
			"@stylistic/lines-around-comment": [
				"error",
				{
					"beforeBlockComment": true,
					"beforeLineComment": true
				}
			],
			"prefer-arrow-callback": "warn",
			"strict": [
				"error",
				"never"
			],
			"@stylistic/arrow-parens": "error",
			"@stylistic/arrow-spacing": "error",
			"no-useless-constructor": "error",
			"no-useless-rename": "error",
			"no-duplicate-imports": "error",
			"init-declarations": "error",
			"no-label-var": "error",
			"@stylistic/comma-dangle": [
				"error",
				"never"
			],
			"no-cond-assign": [
				"error",
				"always"
			],
			"no-console": [ "error",
				{ "allow": [ "error", "info" ] }
			],
			"no-alert": "error",
			"block-scoped-var": "error",
			"@stylistic/dot-location": [
				"error",
				"property"
			],
			"no-useless-call": "error",
			"no-useless-return": "error",
			"no-useless-concat": "error",
			"no-unused-expressions": "off",
			"@stylistic/no-multi-spaces": "error",
			"no-implicit-coercion": "error",
			"no-empty-function": "off",

			// This rule is also disabled in the common-rules/index.js file
			"consistent-return": "off",

			"curly": [
				"error",
				"all"
			],
			"default-case": "error",
			"dot-notation": [
				"error",
				{
					"allowKeywords": true
				}
			],
			"no-extra-label": "error",
			"no-labels": "error",
			"guard-for-in": "error",
			"no-caller": "error",
			"no-else-return": "error",
			"no-eq-null": "error",
			"no-eval": "error",
			"no-extra-bind": "error",
			"@stylistic/no-floating-decimal": "error",
			"no-implied-eval": "error",
			"no-lone-blocks": "error",
			"no-loop-func": "error",
			"no-multi-str": "error",
			"no-new": "error",
			"no-new-func": "error",
			"no-new-wrappers": "error",
			"no-octal-escape": "error",
			"no-param-reassign": "error",
			"no-proto": "error",
			"@stylistic/computed-property-spacing": [
				"error",
				"always"
			],
			"@stylistic/new-parens": "error",
			"no-lonely-if": "error",
			"@stylistic/no-mixed-operators": "error",
			"@stylistic/no-whitespace-before-property": "error",

			"@stylistic/newline-per-chained-call": [
				"error",
				{
					"ignoreChainWithDepth": 2
				}
			],
			"@stylistic/brace-style": [
				"error",
				"1tbs",
				{
					"allowSingleLine": false
				}
			],

			"@stylistic/comma-spacing": [
				"error",
				{
					"before": false,
					"after": true
				}
			],
			"@stylistic/comma-style": [
				"error",
				"last"
			],
			"@stylistic/eol-last": "error",
			"func-names": "error",
			"no-return-assign": [
				"error",
				"always"
			],
			"require-await": "warn",
			"@stylistic/max-len": [
				"warn", {
					"code": 145,
					"comments": 165,
					"ignoreTrailingComments": true,
					"ignoreUrls": true,
					"ignoreStrings": true,
					"ignoreTemplateLiterals": true,
					"ignoreRegExpLiterals": true
				}
			],
			"max-lines": [
				"warn", {
					"max": 7500,
					"skipBlankLines": true,
					"skipComments": true
				}
			],
			"max-lines-per-function": [
				"warn", {
					"max": 550,
					"skipBlankLines": true,
					"skipComments": true
				}
			],
			"no-warning-comments": [
				"warn",
				{
					"terms": [
						"todo",
						"fixme",
						"hack"
					],
					"location": "start"
				}
			],
			"@stylistic/no-mixed-spaces-and-tabs": [
				"warn",
				"smart-tabs"
			],
			"@stylistic/key-spacing": [
				"error",
				{
					"beforeColon": false,
					"afterColon": true
				}
			],
			"max-depth": [
				"error",
				{
					"max": 10
				}
			],
			"@stylistic/multiline-ternary": "error",
			"@stylistic/operator-linebreak": [
				"error",
				"after",
				{
					"overrides": { "?": "before", ":": "before" }
				}
			],
			"@stylistic/func-call-spacing": "error",
			"@stylistic/wrap-regex": "error",
			"no-object-constructor": "error",
			"@stylistic/no-extra-parens": [
				"error",
				"functions"
			],
			"one-var": [
				"error",
				"never"
			],
			"@stylistic/semi-spacing": [
				"error",
				{
					"before": false,
					"after": true
				}
			],
			"@stylistic/keyword-spacing": [
				"error",
				{
					"before": true,
					"after": true,
					"overrides": {
						"if": {
							"after": false
						},
						"for": {
							"after": false
						},
						"while": {
							"after": false
						},
						"switch": {
							"after": false
						},
						"catch": {
							"after": false
						}
					}
				}
			],
			"new-cap": [ "error", { "newIsCap": true } ],
			"prefer-spread": "error",
			"no-shadow": "off",
			"no-unsafe-optional-chaining": "error",

			// https://git.motivesys.com/style/eslint-rules/-/issues/6
			// This rule configuration is in further investigation.
			"camelcase": [ "error", {
				"properties": "never"
			} ],
			"@stylistic/space-before-blocks": "error",
			"@stylistic/space-before-function-paren": [
				"error",
				"never"
			],
			"@stylistic/space-infix-ops": "error",
			"@stylistic/spaced-comment": [
				"error",
				"always",
				{
					"exceptions": [
						"-"
					],
					"markers": [
						"/"
					]
				}
			],
			"@stylistic/padding-line-between-statements": [
				"error",
				{ "blankLine": "always", "prev": "directive", "next": "*" },
				{ "blankLine": "any", "prev": "directive", "next": "directive" }
			],
			"@stylistic/function-call-argument-newline": [
				"error",
				"always"
			]
		}
	}
];
