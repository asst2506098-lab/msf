import { useCallback, useState, useEffect } from "react";

export function useSessionStorage<T>(
  key: string,
  initialValue: T
): {
  storedValue: T;
  setValue: (value: T) => void;
  removeValue: () => void;
  isLoaded: boolean;
} {
  const [storedValue, setStoredValue] = useState<T>(initialValue);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    try {
      const item = sessionStorage.getItem(key);
      if (item) {
        setStoredValue(JSON.parse(item));
      }
    } catch (error) {
      alert(`세션스토리지에서 ${key} 읽기 실패:${error}`);
    } finally {
      setIsLoaded(true);
    }
  }, [key]);

  const setValue = useCallback(
    (value: T) => {
      try {
        setStoredValue(value);
        sessionStorage.setItem(key, JSON.stringify(value));
      } catch (error) {
        alert(`세션스토리지 저장 실패:${error}`);
      }
    },
    [key]
  );

  const removeValue = useCallback(() => {
    try {
      setStoredValue(initialValue);
      sessionStorage.removeItem(key);
    } catch (error) {
      alert(`세션스토리지 제거 실패:${error}`);
    }
  }, [key, initialValue]);

  return { storedValue, setValue, removeValue, isLoaded };
}
