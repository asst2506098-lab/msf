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
          <input
            {...field}
            id={name}
            type="date"
            disabled={disabled}
            min={min}
            max={max}
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
