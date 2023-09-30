import { Input } from '@app/(root)/components/ui/input';
import { cn } from '@app/(root)/lib/utils';
import React, { ComponentProps } from 'react';

interface Props extends ComponentProps<typeof Input> {}

const FormInput = React.forwardRef<HTMLInputElement, Props>((props, ref) => {
  return (
    <Input
      ref={ref}
      className={cn(
        'no-focus paragraph-reqular background-light700_dark300 light-border-2 text-dark300_light700  border',
        props.className,
      )}
      {...props}
    />
  );
});

FormInput.displayName = 'FormInput';
export default FormInput;
