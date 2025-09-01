import { useFormContext } from "react-hook-form";
import { SubmitFormData } from "@/features/bookForm/types/basicStep";

export function usePreview() {
  const { watch } = useFormContext<SubmitFormData>();
  const formData = watch();

  return {
    formData,
  };
}
