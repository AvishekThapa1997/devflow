import zod from 'zod';
export const AnswerSchema = zod.object({
  content: zod.string().min(20),
});

export type AnswerSchemaDefinition = zod.infer<typeof AnswerSchema>;
