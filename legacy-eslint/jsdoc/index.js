/**
 * JSDoc rules.
 */

const jsdoc = require( "eslint-plugin-jsdoc" );

module.exports = [
	jsdoc.configs[ "flat/recommended-typescript-flavor" ],
	{
		settings: {
			"jsdoc": {
				"mode": "typescript"
			}
		},
		rules: {
			"jsdoc/require-jsdoc": [
				"error",
				{
					"publicOnly": true,
					"require": {
						"MethodDefinition": true,
						"ClassDeclaration": true,
						"FunctionDeclaration": true,
						"ArrowFunctionExpression": true
					}
				}
			],
			"jsdoc/tag-lines": [ "error", "any", { "startLines": 1 } ],
			"jsdoc/require-param": [ "error", { "enableFixer": false } ],

			// No need in typescript.
			"jsdoc/require-param-type": "off",
			"jsdoc/require-returns-type": "off"
		}
	}
];
