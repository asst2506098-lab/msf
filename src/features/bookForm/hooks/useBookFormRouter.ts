import { useCallback, useMemo } from "react";
import { useRouter } from "next/router";
import { BOOK_FORM_STEPS, TOTAL_STEPS } from "../constants/steps";
import {
  getStepIndexByPath,
  getStepPathByIndex,
  getNextStepPath,
  getPrevStepPath,
  getFirstStepPath,
} from "../utils/steps";

export type BookFormNavigation = {
  stepIndex: number;
  totalSteps: number;
  currentPath: string;
  meta: {
    title: string;
    description: string;
  };
  isFirst: boolean;
  isLast: boolean;
  goTo: (index: number) => void;
  goToPath: (path: string) => void;
  goNext: () => void;
  goPrev: () => void;
  goFirst: () => void;
};

export function useBookFormRouter(): BookFormNavigation {
  const router = useRouter();

  const currentIndex = useMemo(() => {
    const path = router.query.step as string;
    if (!path) return 0;

    const idx = getStepIndexByPath(path);
    return idx ?? 0;
  }, [router.query.step]);

  const currentPath = useMemo(() => {
    return getStepPathByIndex(currentIndex) ?? getFirstStepPath();
  }, [currentIndex]);

  const goToPath = useCallback(
    (path: string) => {
      const step = BOOK_FORM_STEPS.find((s) => s.path === path);
      if (step) {
        router.replace(
          { pathname: "/books/[step]", query: { step: path } },
          undefined,
          { shallow: true }
        );
      }
    },
    [router]
  );

  const goTo = useCallback(
    (index: number) => {
      const clamped = Math.max(0, Math.min(TOTAL_STEPS - 1, index));
      const path = getStepPathByIndex(clamped);
      if (path) {
        goToPath(path);
      }
    },
    [goToPath]
  );

  const goNext = useCallback(() => {
    const nextPath = getNextStepPath(currentPath);
    if (nextPath) {
      goToPath(nextPath);
    }
  }, [currentPath, goToPath]);

  const goPrev = useCallback(() => {
    const prevPath = getPrevStepPath(currentPath);
    if (prevPath) {
      goToPath(prevPath);
    }
  }, [currentPath, goToPath]);

  const goFirst = useCallback(() => {
    goToPath(getFirstStepPath());
  }, [goToPath]);

  const { title, description } =
    BOOK_FORM_STEPS[currentIndex] ?? BOOK_FORM_STEPS[0];
  const isFirst = currentIndex === 0;
  const isLast = currentIndex === TOTAL_STEPS - 1;

  return {
    stepIndex: currentIndex,
    totalSteps: TOTAL_STEPS,
    currentPath,
    meta: { title, description },
    isFirst,
    isLast,
    goTo,
    goToPath,
    goNext,
    goPrev,
    goFirst,
  };
}
