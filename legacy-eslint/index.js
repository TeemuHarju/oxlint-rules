/*
 * Flat-config exports for the M-Files ESLint rules package.
 *
 * Consumers import this package and spread the desired config into
 * their eslint.config.js. See the README for usage.
 */

const recommended = require( "./recommended" );
const node = require( "./node" );
const react = require( "./react" );
const parserOptions = require( "./parser-options" );
const commonRules = require( "./common-rules" );
const formatting = require( "./formatting" );
const jsdoc = require( "./jsdoc" );
const sonar = require( "./sonar" );
const unicorn = require( "./unicorn" );

module.exports = {
	configs: {
		recommended,
		node,
		react,
		"parser-options": parserOptions,
		"common-rules": commonRules,
		formatting,
		jsdoc,
		sonar,
		unicorn
	}
};
