/**
 * Default language options (parser, parserOptions, browser globals).
 */

const tseslint = require( "typescript-eslint" );
const globals = require( "globals" );

module.exports = [
	{
		languageOptions: {
			parser: tseslint.parser,
			ecmaVersion: 2020,
			sourceType: "module",
			globals: {
				...globals.browser
			}
		}
	}
];
