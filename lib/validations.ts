import { z } from "zod";

export const QuestionsSchema = z.object({
	title: z
		.string()
		.min(5, "It must contain 5 characters or more.")
		.max(130, "It must contain 130 characters or less."),
	explanation: z.string().min(100, "It must contain 100 characters or more."),
	tags: z.array(z.string().min(1).max(15).min(1).max(3)),
});
