import {
  FieldPath,
  FieldValues,
  RegisterOptions,
  useController,
  useFormContext,
} from "react-hook-form";

type Option = {
  value: string | number;
  label: string;
};

type Props<T extends FieldValues> = {
  name: FieldPath<T>;
  label?: string;
  options: readonly Option[];
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
      {error && (
        <div id={`${name}-error`} role="alert" style={{ color: "red" }}>
          {error.message}
        </div>
      )}
    </div>
  );
}
