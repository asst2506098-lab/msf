import {
  Controller,
  FieldPath,
  FieldValues,
  RegisterOptions,
  useFormContext,
} from "react-hook-form";

type Option = {
  value: string | number;
  label: string;
};

type Props<T extends FieldValues> = {
  name: FieldPath<T>;
  label?: string;
  options: Option[];
  placeholder?: string;
  required?: boolean;
  disabled?: boolean;
  rules?: RegisterOptions<T, FieldPath<T>>;
};

export function SelectBox<T extends FieldValues>({
  name,
  label,
  options,
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
          <select {...field} id={name} disabled={disabled}>
            {placeholder && (
              <option value="" disabled>
                {placeholder}
              </option>
            )}
            {options.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
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
