'use client';

import {
  AnswerSchema,
  AnswerSchemaDefinition,
} from '@src/app/(root)/validation/answer-schema';
import BaseForm from '../../shared/components/BaseForm';
import {
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from '@src/app/(root)/components/ui/form';
import { zodResolver } from '@hookform/resolvers/zod';
import MarkupEditor from '../../shared/components/MarkupEditor';

export default function AnswerForm() {
  const onSubmit = async (data: AnswerSchemaDefinition) => {};
  return (
    <BaseForm<AnswerSchemaDefinition>
      onSubmit={onSubmit}
      options={{
        resolver: zodResolver(AnswerSchema),
        defaultValues: {
          content: '',
        },
      }}
      renderFields={(form) => {
        return (
          <FormField
            control={form.control}
            name='content'
            render={({ field }) => (
              <FormItem className='flex w-full flex-col'>
                <FormControl className='mt-4'>
                  <MarkupEditor
                    onChange={field.onChange}
                    disabled={form.formState.isSubmitting}
                  />
                </FormControl>
                <FormMessage className='text-red-500' />
              </FormItem>
            )}
          />
        );
      }}
    ></BaseForm>
  );
}
