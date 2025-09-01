import { useSessionStorage } from "@/shared/hooks/useSessionStorage";
import { SubmitFormData } from "../types/basicStep";
import { useEffect, useCallback } from "react";
import { UseFormReturn } from "react-hook-form";
import {
  BOOK_FORM_STORAGE_KEY,
  DEFAULT_FORM_DATA,
} from "../constants/sessionStorage";

export function useBookFormData(methods: UseFormReturn<SubmitFormData>) {
  const { storedValue, setValue, removeValue } =
    useSessionStorage<SubmitFormData>(BOOK_FORM_STORAGE_KEY, DEFAULT_FORM_DATA);

  useEffect(() => {
    const hasStoredData =
      storedValue &&
      JSON.stringify(storedValue) !== JSON.stringify(DEFAULT_FORM_DATA);

    if (hasStoredData) {
      methods.reset(storedValue);
    }
  }, [storedValue, methods]);

  const resetValue = useCallback(() => {
    removeValue();
    methods.reset(DEFAULT_FORM_DATA);
  }, [removeValue, methods]);

  const saveFormData = useCallback(() => {
    const currentData = methods.getValues();
    setValue(currentData);
  }, [methods, setValue]);

  return {
    resetValue,
    saveFormData,
  };
}
