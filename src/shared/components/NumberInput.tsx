import {
  Controller,
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
  min?: number;
  max?: number;
  step?: number;
};

export function NumberInput<T extends FieldValues>({
  name,
  label,
  placeholder,
  required,
  disabled,
  rules,
  min,
  max,
  step,
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
        type="number"
        placeholder={placeholder}
        disabled={disabled}
        min={min}
        max={max}
        step={step}
      />
      {error && (
        <div id={`${name}-error`} role="alert" style={{ color: "red" }}>
          {error.message}
        </div>
      )}
    </div>
  );
}
