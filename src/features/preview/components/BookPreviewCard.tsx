import {
  ReadingStatus,
  SubmitFormData,
} from "@/features/bookForm/types/basicStep";

export function BookPreviewCard({ formData }: { formData: SubmitFormData }) {
  const {
    bookTitle,
    author,
    publisher,
    publishedDate,
    totalPages,
    readingStatus,
    readingStartDate,
    readingEndDate,
    isRecommended,
    rating,
    review,
    quotes,
    isPublic,
  } = formData;

  return (
    <div>
      <p>도서 제목: {bookTitle}</p>
      <p>저자: {author}</p>
      <p>출판사: {publisher}</p>
      <p>출판일: {publishedDate}</p>
      <p>전체 페이지 수: {totalPages || 0}페이지</p>
      <p>읽기 상태: {READING_STATUS_LABELS[readingStatus]}</p>
      {readingStartDate && <span>시작일: {readingStartDate}</span>}
      {readingEndDate && <span>종료일: {readingEndDate}</span>}
      <p>추천 여부: {isRecommended ? "추천" : "비추천"}</p>
      <p>평가: {rating || "평점 없음"}</p>
      <p>독후감:</p>
      <div style={{ width: "350px", height: "80px", overflowY: "auto" }}>
        {review}
      </div>
      <div>
        <p>인용구:</p>
        <div style={{ width: "350px", overflowY: "auto" }}>
          {quotes && quotes.length > 0 ? (
            quotes.map((quote, index) => (
              <div key={index}>
                <span>
                  {index + 1} {quote.page}페이지: {quote.content}
                </span>
              </div>
            ))
          ) : (
            <span>인용구가 없습니다</span>
          )}
        </div>
      </div>
      <p>공개설정: {isPublic ? "공개" : "비공개"}</p>
    </div>
  );
}

const READING_STATUS_LABELS: Record<ReadingStatus, string> = {
  want_to_read: "읽고 싶음",
  reading: "읽는 중",
  finished: "읽음",
  paused: "일시정지",
};
