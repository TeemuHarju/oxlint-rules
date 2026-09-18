import { eslintCompatPlugin } from "@oxlint/plugins";

import { noTodoCommentsRule } from "./rules/no-todo-comments.js";

const plugin = eslintCompatPlugin({
	meta: {
		name: "teemu",
	},
	rules: {
		"no-todo-comments": noTodoCommentsRule,
	},
});

export { noTodoCommentsRule } from "./rules/no-todo-comments";
export default plugin;
