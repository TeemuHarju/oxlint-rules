/**
 * Flat config used by `npm run lint:tests` to lint the intentional-violation
 * fixture files in this folder.
 */

const mfRules = require( ".." );

module.exports = [
	...mfRules.configs.recommended,
	...mfRules.configs.node,
	...mfRules.configs.react,
	{
		rules: {
			"no-undef": "off"
		}
	},
	{
		ignores: [ "integration/**" ]
	}
];
