import { InputHTMLAttributes, forwardRef } from "react";

type Props = InputHTMLAttributes<HTMLInputElement> & {
  invalid?: boolean;
};

export const TextField = forwardRef<HTMLInputElement, Props>(function TextField(
  { invalid, ...props },
  ref
) {
  return (
    <input ref={ref} {...props} aria-invalid={invalid ? "true" : undefined} />
  );
});
