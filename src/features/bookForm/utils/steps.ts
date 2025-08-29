import {
  BOOK_FORM_STEPS,
  BookFormStepMeta,
  TOTAL_STEPS,
} from "../constants/steps";

export function getStepMetaByIndex(
  index: number
): BookFormStepMeta | undefined {
  return BOOK_FORM_STEPS[index];
}

export function getStepIndexFromParam(
  stepParam: string | string[] | undefined
): number | undefined {
  if (typeof stepParam !== "string") return undefined;
  const parsed = Number(stepParam);
  if (!Number.isInteger(parsed)) return undefined;
  const idx = parsed - 1;
  if (idx < 0 || idx >= TOTAL_STEPS) return undefined;
  return idx;
}
