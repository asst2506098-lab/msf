import {
  FieldPath,
  FieldValues,
  RegisterOptions,
  useController,
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
  const { control } = useFormContext<T>();
  const {
    field,
    fieldState: { error },
  } = useController({
    name,
    control,
    rules,
  });

  return (
    <div>
      {label && (
        <label htmlFor={name}>
          {label}
          {required && <span>*</span>}
        </label>
      )}
      <textarea
        {...field}
        id={name}
        placeholder={placeholder}
        disabled={disabled}
        rows={rows}
        cols={cols}
      />
      {error && (
        <div id={`${name}-error`} role="alert" style={{ color: "red" }}>
          {error.message}
        </div>
      )}
    </div>
  );
}
