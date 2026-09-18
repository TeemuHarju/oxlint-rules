import { RuleTester } from "oxlint/plugins-dev";
import { describe, it } from "vitest";

import { noTodoCommentsRule } from "@/rules/no-todo-comments";

RuleTester.describe = describe;
RuleTester.it = it;

const tester = new RuleTester({
	languageOptions: { parserOptions: { lang: "ts" } },
});

tester.run("teemu/no-todo-comments", noTodoCommentsRule, {
	valid: ["const text = 'TODO inside a string is fine';", "// Work is tracked in issue #42."],
	invalid: [
		{
			code: "// TODO: replace this\nconst value = 1;",
			errors: [{ messageId: "untrackedWork" }],
		},
		{
			code: "/* fixme before release */\nconst value = 1;",
			errors: [{ messageId: "untrackedWork" }],
		},
	],
});
