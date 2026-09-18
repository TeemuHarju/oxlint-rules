/**
 * Recommended ruleset: composes parser-options, common-rules, formatting,
 * jsdoc, sonar, unicorn.
 */

const parserOptions = require( "../parser-options" );
const commonRules = require( "../common-rules" );
const formatting = require( "../formatting" );
const jsdoc = require( "../jsdoc" );
const sonar = require( "../sonar" );
const unicorn = require( "../unicorn" );

module.exports = [
	...parserOptions,
	...commonRules,
	...formatting,
	...jsdoc,
	...sonar,
	...unicorn
];
