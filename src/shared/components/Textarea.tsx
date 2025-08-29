import {
  Controller,
  FieldPath,
  FieldValues,
  RegisterOptions,
  useFormContext,
} from "react-hook-form";

type Props<T extends FieldValues> = {
  name: FieldPath<T>;
  label?: string;
  placeholder?: string;
  required?: boolean;
  disabled?: boolean;
  rules?: RegisterOptions<T, FieldPath<T>>;
  rows?: number;
  cols?: number;
};

export function Textarea<T extends FieldValues>({
  name,
  label,
  placeholder,
  required,
  disabled,
  rules,
  rows = 4,
  cols,
}: Props<T>) {
  const {
    formState: { errors },
  } = useFormContext();
  const error = errors[name]?.message as string;

  return (
    <div>
      {label && (
        <label htmlFor={name}>
          {label}
          {required && <span>*</span>}
        </label>
      )}
      <Controller
        name={name}
        rules={rules}
        render={({ field }) => (
          <textarea
            {...field}
            id={name}
            placeholder={placeholder}
            disabled={disabled}
            rows={rows}
            cols={cols}
          />
        )}
      />
      {error && (
        <div id={`${name}-error`} role="alert">
          {error}
        </div>
      )}
    </div>
  );
}
