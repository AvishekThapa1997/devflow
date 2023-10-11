import zod from 'zod';
export const QuestionSchema = zod.object({
  title: zod.string().min(5).max(130),
  explanation: zod.string().min(10),
  tags: zod
    .array(
      zod.object({
        name: zod.string().min(1).max(15),
      }),
    )
    .min(1, {
      message: 'Must provide atleast one tag',
    })
    .max(3, {
      message: 'Cannot provide more than 3 tags',
    }),
});

export type QuestionSchemaDefinition = zod.infer<typeof QuestionSchema>;
