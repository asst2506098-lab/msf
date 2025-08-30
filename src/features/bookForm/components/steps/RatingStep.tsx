import { useFormContext } from "react-hook-form";
import { Checkbox, NumberInput } from "@/shared/components";
import { SubmitFormData } from "../../types/basicStep";

export function RatingStep() {
  const { watch } = useFormContext<SubmitFormData>();
  const rating = watch("rating");

  return (
    <>
      <Checkbox name="isRecommended" label="이 책을 추천하시나요?" />
      <NumberInput
        name="rating"
        label="별점"
        placeholder="0~5 사이의 별점을 입력하세요"
        required
        min={0}
        max={5}
        step={0.5}
        rules={{
          required: "별점은 필수입니다",
          min: { value: 0, message: "별점은 0점 이상이어야 합니다" },
          max: { value: 5, message: "별점은 5점 이하여야 합니다" },
        }}
      />

      {rating > 0 && <p>현재 별점: {rating}점</p>}
    </>
  );
}
