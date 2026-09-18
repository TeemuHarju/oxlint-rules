/**
 * React rules.
 *
 * https://github.com/jsx-eslint/eslint-plugin-react
 * https://www.npmjs.com/package/eslint-plugin-react-hooks
 */

const react = require( "eslint-plugin-react" );
const reactHooks = require( "eslint-plugin-react-hooks" );

module.exports = [
	react.configs.flat.recommended,
	react.configs.flat[ "jsx-runtime" ],
	{
		plugins: {
			"react-hooks": reactHooks
		},
		rules: reactHooks.configs.recommended.rules
	},
	{
		settings: {
			"react": {
				"version": "detect"
			}
		},
		rules: {
			"react/display-name": "off",
			"react/boolean-prop-naming": "error",
			"react/button-has-type": "error",
			"react/jsx-boolean-value": [
				"error",
				"always"
			],
			"react/default-props-match-prop-types": "error",
			"react/jsx-child-element-spacing": "error",
			"react/jsx-curly-newline": "error",
			"react/jsx-curly-spacing": [
				"error",
				{
					"when": "always",
					"children": true
				}
			],
			"react/jsx-equals-spacing": "error",
			"react/jsx-filename-extension": [ 1, { "extensions": [ ".tsx", ".jsx" ] } ],
			"react/jsx-first-prop-new-line": "error",
			"react/jsx-indent-props": [
				"error",
				{
					"indentMode": "tab",
					"ignoreTernaryOperator": true
				}
			],
			"react/jsx-indent": [
				"error",
				"tab"
			],
			"react/jsx-max-props-per-line": "error",
			"react/jsx-no-bind": [ "error", {
				"ignoreDOMComponents": false,
				"ignoreRefs": false,
				"allowArrowFunctions": true,
				"allowFunctions": true,
				"allowBind": false
			} ],
			"react/jsx-no-literals": "error",
			"react/jsx-no-script-url": "error",
			"react/jsx-no-useless-fragment": [ "error", { "allowExpressions": true } ],
			"react/jsx-pascal-case": "error",
			"react/jsx-tag-spacing": "error",
			"react/jsx-wrap-multilines": "error",
			"react/no-access-state-in-setstate": "error",
			"react/no-arrow-function-lifecycle": "error",
			"react/no-danger": "error",
			"react/no-did-mount-set-state": "error",
			"react/no-did-update-set-state": "error",
			"react/no-this-in-sfc": "error",
			"react/no-typos": "error",
			"react/no-unstable-nested-components": "error",
			"react/no-unused-prop-types": "error",
			"react/no-unused-state": "error",
			"react/no-will-update-set-state": "error",
			"react/prefer-stateless-function": "error",
			"react/self-closing-comp": "error",
			"react/void-dom-elements-no-children": "error"
		}
	}
];
