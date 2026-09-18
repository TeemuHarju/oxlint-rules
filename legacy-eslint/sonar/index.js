/**
 * SonarJS rules.
 *
 * https://github.com/SonarSource/SonarJS
 */

const sonarjs = require( "eslint-plugin-sonarjs" );

module.exports = [
	sonarjs.configs.recommended,
	{
		rules: {
			"sonarjs/cognitive-complexity": "off",
			"sonarjs/todo-tag": "off",
			"sonarjs/new-cap": "off",
			"sonarjs/no-unused-vars": "off",
			"sonarjs/public-static-readonly": "off"
		}
	}
];
