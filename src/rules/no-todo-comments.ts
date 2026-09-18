import { defineRule } from "@oxlint/plugins";

const todoPattern = /\b(?:TODO|FIXME)\b/iu;

/** Disallow TODO and FIXME comments. */
export const noTodoCommentsRule = defineRule({
	meta: {
		type: "suggestion",
		docs: {
			description: "Disallow TODO and FIXME comments.",
		},
		messages: {
			untrackedWork:
				"Replace this {{marker}} comment with a tracked issue or finish the work.",
		},
	},
	createOnce(context) {
		return {
			Program() {
				for (const comment of context.sourceCode.getAllComments()) {
					const match = todoPattern.exec(comment.value);

					if (match !== null) {
						context.report({
							node: comment,
							messageId: "untrackedWork",
							data: { marker: match[0].toUpperCase() },
						});
					}
				}
			},
		};
	},
});
