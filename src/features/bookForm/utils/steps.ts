import { BOOK_FORM_STEPS, BookFormStepMeta } from "../constants/steps";

export function getStepMetaByIndex(
  index: number
): BookFormStepMeta | undefined {
  return BOOK_FORM_STEPS[index];
}

// 경로로 단계 메타데이터 조회
export function getStepMetaByPath(path: string): BookFormStepMeta | undefined {
  return BOOK_FORM_STEPS.find((step) => step.path === path);
}

// 경로로 인덱스 조회 (배열 순서 기반)
export function getStepIndexByPath(path: string): number | undefined {
  const index = BOOK_FORM_STEPS.findIndex((step) => step.path === path);
  return index >= 0 ? index : undefined;
}

// 인덱스로 경로 조회
export function getStepPathByIndex(index: number): string | undefined {
  const step = getStepMetaByIndex(index);
  return step?.path;
}

// 다음 단계 경로 조회
export function getNextStepPath(currentPath: string): string | undefined {
  const currentIndex = getStepIndexByPath(currentPath);
  if (
    currentIndex === undefined ||
    currentIndex >= BOOK_FORM_STEPS.length - 1
  ) {
    return undefined;
  }
  return BOOK_FORM_STEPS[currentIndex + 1].path;
}

// 이전 단계 경로 조회
export function getPrevStepPath(currentPath: string): string | undefined {
  const currentIndex = getStepIndexByPath(currentPath);
  if (currentIndex === undefined || currentIndex <= 0) {
    return undefined;
  }
  return BOOK_FORM_STEPS[currentIndex - 1].path;
}

// 첫 번째 단계 경로 조회
export function getFirstStepPath(): string {
  return BOOK_FORM_STEPS[0].path;
}

// 마지막 단계 경로 조회
export function getLastStepPath(): string {
  return BOOK_FORM_STEPS[BOOK_FORM_STEPS.length - 1].path;
}
