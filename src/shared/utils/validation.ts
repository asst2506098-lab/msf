export type ValidationResult = { ok: true } | { ok: false; reason: string };

export function requireNonEmpty(value: string): ValidationResult {
  if (!value || value.trim() === "")
    return { ok: false, reason: "필수 입력입니다." };
  return { ok: true };
}
