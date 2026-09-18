import path from "node:path";
import { fileURLToPath } from "node:url";
import { describe, it, expect } from "vitest";
import { ESLint } from "eslint";
import mfRules from "../../index.js";

const __dirname = path.dirname( fileURLToPath( import.meta.url ) );
const repoRoot = path.resolve( __dirname, "../.." );

const scopes = {
	recommended: [
		...mfRules.configs.recommended,
		{ rules: { "no-undef": "off" } }
	],
	node: [
		...mfRules.configs.recommended,
		...mfRules.configs.node,
		{ rules: { "no-undef": "off" } }
	],
	react: [
		...mfRules.configs.recommended,
		...mfRules.configs.react,
		{ rules: { "no-undef": "off" } }
	]
};

const fixtures = [
	"tests/node.js",
	"tests/plainJavaScript.js",
	"tests/testFile.ts",
	"tests/testComponent.tsx",
	"tests/types.ts"
];

function summarize( results ) {
	return results
		.flatMap( r => r.messages.map( m => ( {
			file: path.relative( repoRoot, r.filePath ).replace( /\\/g, "/" ),
			ruleId: m.ruleId,
			line: m.line,
			severity: m.severity
		} ) ) )
		.sort( ( a, b ) =>
			a.file.localeCompare( b.file ) ||
			a.line - b.line ||
			( a.ruleId || "" ).localeCompare( b.ruleId || "" )
		);
}

describe( "ESLint config integration", () => {
	for( const [ name, config ] of Object.entries( scopes ) ) {
		it( `${name} scope: stable violations across fixtures`, async () => {
			const eslint = new ESLint( {
				cwd: repoRoot,
				overrideConfigFile: true,
				overrideConfig: config
			} );
			const filePaths = fixtures.map( f => path.join( repoRoot, f ) );
			const results = await eslint.lintFiles( filePaths );
			expect( summarize( results ) ).toMatchSnapshot();
		} );
	}
} );
