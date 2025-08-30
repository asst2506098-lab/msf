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
};

export function Checkbox<T extends FieldValues>({
  name,
  label,
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
      {error && (
        <div id={`${name}-error`} role="alert" style={{ color: "red" }}>
          {error.message}
        </div>
      )}
    </div>
  );
}
