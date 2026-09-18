// One-time, reproducible inventory from the frozen legacy package.
// Requires `npm ci --ignore-scripts` in legacy-eslint. Review generated changes.
import { createRequire } from "node:module";
import { execFileSync } from "node:child_process";
import { mkdirSync, writeFileSync } from "node:fs";
import { fileURLToPath } from "node:url";

const root = fileURLToPath(new URL("../", import.meta.url));
const requireLegacy = createRequire(new URL("../legacy-eslint/package.json", import.meta.url));
const { ESLint } = requireLegacy("eslint");
const legacy = requireLegacy("./index.js");
const catalogue = JSON.parse(execFileSync(process.execPath, ["node_modules/oxlint/bin/oxlint", "--rules", "--format", "json"], { cwd: root, encoding: "utf8", maxBuffer: 4_000_000 }));
const native = new Set(catalogue.map(rule => `${rule.scope}/${rule.value}`));
const aliases = { "@typescript-eslint": "typescript", n: "node", "react-hooks": "react" };
const replacements = {
	"unicorn/no-array-push-push": "unicorn/prefer-single-call",
	"n/no-process-exit": "unicorn/no-process-exit",
	"sonarjs/no-fallthrough": "eslint/no-fallthrough",
	"sonarjs/no-primitive-wrappers": "eslint/no-new-wrappers",
	"sonarjs/updated-const-var": "eslint/no-const-assign",
	"sonarjs/generator-without-yield": "eslint/require-yield",
	"sonarjs/no-empty-character-class": "eslint/no-empty-character-class",
	"sonarjs/no-useless-catch": "eslint/no-useless-catch",
};
const parserRules = new Set(["no-octal", "no-octal-escape", "no-dupe-args"]);
const formatting = new Set([
	"jsx-curly-newline", "jsx-curly-spacing", "jsx-equals-spacing", "jsx-first-prop-new-line",
	"jsx-indent-props", "jsx-indent", "jsx-max-props-per-line", "jsx-tag-spacing", "jsx-wrap-multilines", "self-closing-comp",
].map(name => `react/${name}`));
const inventory = new Map();

function convert(config, scope, language) {
	const rules = {};
	for (const [id, options] of Object.entries(config.rules)) {
		const slash = id.indexOf("/");
		const group = slash < 0 ? "eslint" : id.slice(0, slash);
		const name = slash < 0 ? id : id.slice(slash + 1);
		const meta = config.plugins[group]?.rules[name]?.meta;
		let target = replacements[id] ?? `${aliases[group] ?? group}/${name}`;
		let status = "native";
		let note = "Native port; diagnostic wording and edge cases may differ.";
		if (group === "@stylistic" || formatting.has(id)) {
			status = "format-policy";
			target = null;
			note = "Removed from linting; Oxfmt owns layout. Legacy style is not reproduced exactly.";
		} else if (parserRules.has(id)) {
			status = "parser";
			target = null;
			note = "Invalid in strict/module code; covered by parser diagnostics, not a separate rule.";
		} else if (id === "react/jsx-uses-vars") {
			status = "native-analysis";
			target = null;
			note = "Oxlint unused-variable analysis understands JSX references.";
		} else if (id === "jsdoc/require-param") {
			status = "javascript";
			target = "jsdoc-js/require-param";
			note = "Native require-param rejects enableFixer:false; retain the original no-fixer behavior.";
		} else if (!native.has(target)) {
			if (group === "@typescript-eslint" && native.has(`eslint/${name}`)) {
				target = `eslint/${name}`;
			} else {
				status = "javascript";
				target = `${["sonarjs", "security"].includes(group) ? group : `${group}-js`}/${name}`;
				note = meta?.docs?.requiresTypeChecking
					? "Type-information limited: retained for untyped behavior, but JS plugins cannot receive TypeScript type services."
					: "Original npm plugin via Oxlint's JavaScript compatibility layer.";
			}
		}
		if (options[0] === 0) {
			status = "disabled";
			target = null;
			note = "Disabled in the resolved legacy configuration.";
		}
		const key = `${id}:${status}:${target}`;
		const row = inventory.get(key) ?? { legacy: id, status, target, note, configurations: {} };
		row.configurations[`${scope}/${language}`] = options;
		inventory.set(key, row);
		if (target) {
			// TypeScript's replacement wins over a core rule. Sonar aliases do not
			// overwrite explicitly configured core options.
			if (!id.startsWith("sonarjs/") || !(target in rules)) rules[target] = options;
		}
	}
	return rules;
}

const presets = {};
for (const scope of ["recommended", "node", "react", "nodeReact"]) {
	const overrideConfig = [...legacy.configs.recommended];
	if (scope === "node" || scope === "nodeReact") overrideConfig.push(...legacy.configs.node);
	if (scope === "react" || scope === "nodeReact") overrideConfig.push(...legacy.configs.react);
	const eslint = new ESLint({ cwd: fileURLToPath(new URL("../legacy-eslint/", import.meta.url)), overrideConfigFile: true, overrideConfig });
	const js = await eslint.calculateConfigForFile("tests/plainJavaScript.js");
	const ts = await eslint.calculateConfigForFile("tests/testFile.ts");
	const jsRules = convert(js, scope, "javascript");
	const tsRules = convert(ts, scope, "typescript");
	const overrides = {};
	for (const key of new Set([...Object.keys(jsRules), ...Object.keys(tsRules)])) {
		if (JSON.stringify(jsRules[key]) !== JSON.stringify(tsRules[key])) overrides[key] = tsRules[key] ?? "off";
	}
	presets[scope] = { rules: jsRules, typescript: overrides, settings: js.settings ?? {} };
}

// Keep source data small: optional presets contain only their changes to base.
for (const scope of ["node", "react", "nodeReact"]) {
	for (const key of Object.keys(presets[scope].rules)) {
		if (JSON.stringify(presets[scope].rules[key]) === JSON.stringify(presets.recommended.rules[key])) delete presets[scope].rules[key];
	}
}
mkdirSync(new URL("../src/configs/", import.meta.url), { recursive: true });
mkdirSync(new URL("../docs/", import.meta.url), { recursive: true });
writeFileSync(new URL("../src/configs/legacy-rules.json", import.meta.url), JSON.stringify(presets, null, "\t") + "\n");
writeFileSync(new URL("../docs/rule-inventory.json", import.meta.url), JSON.stringify([...inventory.values()].sort((a, b) => a.legacy.localeCompare(b.legacy)), null, "\t") + "\n");
console.log(`Generated ${inventory.size} rule decisions for four presets.`);
