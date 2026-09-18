import { mkdirSync } from "node:fs";
import legacy from "../legacy-eslint/index.js";

mkdirSync(new URL("../.migration/", import.meta.url), { recursive: true });
export default [
	...legacy.configs.recommended,
	...legacy.configs.node,
	...legacy.configs.react,
];
