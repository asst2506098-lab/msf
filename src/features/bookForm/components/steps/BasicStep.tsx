import { useFormContext } from "react-hook-form";
import {
  TextInput,
  NumberInput,
  DateInput,
  SelectBox,
} from "@/shared/components";
import { SubmitFormData } from "../../types/basicStep";
import { READING_STATUS_OPTIONS } from "../../constants/readingStatus";

export function BasicStep() {
  const { watch } = useFormContext<SubmitFormData>();
  const readingStatus = watch("readingStatus");

  const isWantToRead = readingStatus === "want_to_read";
  const isFinished = readingStatus === "finished";

  return (
    <>
      <TextInput
        name="bookTitle"
        label="도서 제목"
        placeholder="도서 제목을 입력하세요"
        required
        rules={{ required: "도서 제목은 필수입니다" }}
      />
      <TextInput
        name="author"
        label="저자"
        placeholder="저자를 입력하세요"
        required
        rules={{ required: "저자는 필수입니다" }}
      />
      <TextInput
        name="publisher"
        label="출판사"
        placeholder="출판사를 입력하세요"
        required
        rules={{ required: "출판사는 필수입니다" }}
      />
      <DateInput
        name="publishedDate"
        label="출판일"
        required
        rules={{ required: "출판일은 필수입니다" }}
      />
      <NumberInput
        name="totalPages"
        label="전체 페이지 수"
        placeholder="페이지 수를 입력하세요"
        required
        min={1}
        rules={{
          required: "전체 페이지 수는 필수입니다",
          min: { value: 1, message: "1페이지 이상이어야 합니다" },
        }}
      />
      <SelectBox
        name="readingStatus"
        label="독서 상태"
        options={READING_STATUS_OPTIONS}
        required
        rules={{ required: "독서 상태는 필수입니다" }}
      />
      {!isWantToRead && (
        <DateInput
          name="readingStartDate"
          label="독서 시작일"
          required
          rules={{ required: "독서 시작일은 필수입니다" }}
        />
      )}
      {isFinished && (
        <DateInput
          name="readingEndDate"
          label="독서 종료일"
          required
          rules={{ required: "독서 종료일은 필수입니다" }}
        />
      )}
    </>
  );
}
