/*
 * Example eslint.config.js you can use to lint files in your project.
 * This configuration enables all the rule sets provided by this package.
 *
 * If you have your own parser / parserOptions, set them in a config object
 * AFTER spreading mfRules.configs.recommended so yours wins. The
 * parser-options config from this package sets @typescript-eslint/parser
 * and ecmaVersion: 2020 by default.
 */

const mfRules = require( "@m-files/eslint-config-common-rules" );

module.exports = [

	// Comment out or remove the configs that do not apply to your project

	// Recommended ruleset (includes parser-options, common-rules, formatting, jsdoc, sonar, unicorn)
	...mfRules.configs.recommended,

	// Basic ruleset for Node projects and configuration files
	...mfRules.configs.node,

	// Ruleset that provides the basic rules for React projects
	...mfRules.configs.react,

	// You can override rules here
	{
		rules: {

			// "@typescript-eslint/no-empty-function": "off",
			// "@typescript-eslint/no-shadow": "warn"
		}
	}
];
