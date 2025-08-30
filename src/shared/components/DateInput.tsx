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
  required?: boolean;
  disabled?: boolean;
  rules?: RegisterOptions<T, FieldPath<T>>;
  min?: string;
  max?: string;
};

export function DateInput<T extends FieldValues>({
  name,
  label,
  required,
  disabled,
  rules,
  min,
  max,
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
      <input
        {...field}
        id={name}
        type="date"
        disabled={disabled}
        min={min}
        max={max}
      />
      {error && (
        <div id={`${name}-error`} role="alert" style={{ color: "red" }}>
          {error.message}
        </div>
      )}
    </div>
  );
}
