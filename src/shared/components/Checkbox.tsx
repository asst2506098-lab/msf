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
};

export function Checkbox<T extends FieldValues>({
  name,
  label,
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
      <Controller
        name={name}
        rules={rules}
        render={({ field }) => (
          <label>
            <input
              {...field}
              id={name}
              type="checkbox"
              checked={field.value}
              disabled={disabled}
            />
            {label && (
              <span>
                {label}
                {required && <span>*</span>}
              </span>
            )}
          </label>
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
