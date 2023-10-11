'use client';
import React from 'react';
import {
  FieldValues,
  UseFormProps,
  UseFormReturn,
  useForm,
} from 'react-hook-form';
import { Button } from '@app/(root)/components/ui/button';
import { Form } from '@app/(root)/components/ui/form';
import { BaseProps } from '@app/(root)/types';
import { cn } from '@app/(root)/utils';

interface Props<T extends FieldValues> extends Pick<BaseProps, 'className'> {
  onSubmit: (data: T) => void;
  renderFields: (
    form: UseFormReturn<T>,
  ) => React.JSX.Element | React.JSX.Element[];
  options?: UseFormProps<T>;
}

export default function BaseForm<T extends FieldValues>({
  onSubmit,
  renderFields,
  options,
  className,
}: Props<T>) {
  const form = useForm<T>(options);
  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className={cn('flex flex-col gap-10', className)}
      >
        {renderFields(form)}
        <Button
          type='submit'
          className='primary-gradient w-fit self-center px-8 !text-light-900'
          disabled={form.formState.isSubmitting}
        >
          Submit
        </Button>
      </form>
    </Form>
  );
}
