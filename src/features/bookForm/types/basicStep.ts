export type ReadingStatus = "want_to_read" | "reading" | "finished" | "paused";

// 1단계
export type BasicStepFormData = {
  bookTitle: string;
  author: string;
  publisher: string;
  publishedDate: string;
  totalPages: number;
  readingStatus: ReadingStatus;
  readingStartDate?: string;
  readingEndDate?: string;
};

// 2단계
export type RatingStepFormData = {
  isRecommended: boolean;
  rating: 0 | 0.5 | 1 | 1.5 | 2 | 2.5 | 3 | 3.5 | 4 | 4.5 | 5 | null;
};

// 3단계
export type ReviewStepFormData = {
  review?: string;
};

// 4단계
export type QuotesStepFormData = {
  quotes?: {
    page: number | null;
    content: string;
  }[];
};

// 5단계
export type VisibilityStepFormData = {
  isPublic: boolean;
};

// 1~5단계
export type SubmitFormData = BasicStepFormData &
  RatingStepFormData &
  ReviewStepFormData &
  QuotesStepFormData &
  VisibilityStepFormData;
