import { useCallback, useMemo } from "react";
import { useRouter } from "next/router";
import { BOOK_FORM_STEPS, TOTAL_STEPS } from "../../bookForm/constants/steps";
import { getStepIndexFromParam } from "../utils/steps";

export type BookFormNavigation = {
  stepIndex: number;
  totalSteps: number;
  meta: {
    title: string;
    description: string;
  };
  isFirst: boolean;
  isLast: boolean;
  goTo: (index: number) => void;
  goNext: () => void;
  goPrev: () => void;
  goFirst: () => void;
};

export function useBookFormRouter(): BookFormNavigation {
  const router = useRouter();
  const currentIndex = useMemo(() => {
    const idx = getStepIndexFromParam(router.query.step);
    return idx ?? 0;
  }, [router.query.step]);

  const goTo = useCallback(
    (index: number) => {
      const clamped = Math.max(0, Math.min(TOTAL_STEPS - 1, index));
      router.replace(
        { pathname: "/books/[step]", query: { step: clamped + 1 } },
        undefined,
        {
          shallow: true,
        }
      );
    },
    [router]
  );

  const goNext = useCallback(
    () => goTo(currentIndex + 1),
    [goTo, currentIndex]
  );
  const goPrev = useCallback(
    () => goTo(currentIndex - 1),
    [goTo, currentIndex]
  );
  const goFirst = useCallback(() => goTo(0), [goTo]);

  const { title, description } =
    BOOK_FORM_STEPS[currentIndex] ?? BOOK_FORM_STEPS[0];
  const isFirst = currentIndex === 0;
  const isLast = currentIndex === TOTAL_STEPS - 1;

  return {
    stepIndex: currentIndex,
    totalSteps: TOTAL_STEPS,
    meta: { title, description },
    isFirst,
    isLast,
    goTo,
    goNext,
    goPrev,
    goFirst,
  };
}
