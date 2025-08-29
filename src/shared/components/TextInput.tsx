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
};

export function TextInput<T extends FieldValues>({
  name,
  label,
  placeholder,
  required,
  disabled,
  rules,
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
            type="text"
            placeholder={placeholder}
            disabled={disabled}
          />
        )}
      />
      {error && (
        <div id={`${name}-error`} role="alert" style={{ color: "red" }}>
          {error}
        </div>
      )}
    </div>
  );
}
