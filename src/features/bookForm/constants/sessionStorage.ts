import { SubmitFormData } from "../types/basicStep";

export const BOOK_FORM_STORAGE_KEY = "book-form-data";

export const DEFAULT_FORM_DATA: SubmitFormData = {
  bookTitle: "",
  author: "",
  publisher: "",
  publishedDate: "",
  totalPages: 0,
  readingStatus: "want_to_read",
  readingStartDate: "",
  readingEndDate: "",
  isRecommended: false,
  rating: null,
  review: "",
  quotes: [],
  isPublic: false,
};
