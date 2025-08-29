import type { ComponentType } from "react";
import { BasicStep } from "../components/steps/BasicStep";
import { RatingStep } from "../components/steps/RatingStep";
import { ReviewStep } from "../components/steps/ReviewStep";
import { QuotesStep } from "../components/steps/QuotesStep";
import { VisibilityStep } from "../components/steps/VisibilityStep";
import { SubmitFormData } from "../types/basicStep";

export type BookFormStepKey =
  | "basic"
  | "rating"
  | "review"
  | "quotes"
  | "visibility";

export type BookFormStepMeta = {
  key: BookFormStepKey;
  index: number;
  title: string;
  description: string;
  component: ComponentType;
  fields?: (keyof SubmitFormData)[];
};

export const BOOK_FORM_STEPS: readonly BookFormStepMeta[] = [
  {
    key: "basic",
    index: 0,
    title: "도서 기본 정보",
    description: "기본 정보, 독서 상태, 독서 기간",
    component: BasicStep,
    fields: [
      "bookTitle",
      "author",
      "publisher",
      "publishedDate",
      "totalPages",
      "readingStatus",
      "readingStartDate",
      "readingEndDate",
    ],
  },
  {
    key: "rating",
    index: 1,
    title: "추천 여부 & 별점",
    description: "추천 여부, 별점(0~5, 0.5 스케일)",
    component: RatingStep,
    fields: ["rating"],
  },
  {
    key: "review",
    index: 2,
    title: "독후감",
    description: "별점이 1 또는 5면 100자 이상",
    component: ReviewStep,
    fields: ["review"],
  },
  {
    key: "quotes",
    index: 3,
    title: "인용구",
    description: "페이지 번호 유효성 포함",
    component: QuotesStep,
    fields: ["quotes"],
  },
  {
    key: "visibility",
    index: 4,
    title: "공개 여부",
    description: "공개 범위 설정",
    component: VisibilityStep,
    fields: ["isPublic"],
  },
] as const;

export const TOTAL_STEPS = BOOK_FORM_STEPS.length;
