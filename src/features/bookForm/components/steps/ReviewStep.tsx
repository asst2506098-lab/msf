import { useFormContext } from "react-hook-form";
import { Textarea } from "@/shared/components";
import { SubmitFormData } from "../../types/basicStep";
import { useEffect } from "react";

export function ReviewStep() {
  const { getValues, trigger } = useFormContext<SubmitFormData>();
  const rating = getValues("rating");

  useEffect(() => {
    trigger("review");
  }, [rating]);

  return (
    <>
      <Textarea
        name="review"
        label="독후감"
        placeholder="독후감을 작성해주세요"
        rules={{
          validate: (value: string) => {
            const currentRating = Number(getValues("rating"));

            if (currentRating === 1 || currentRating === 5) {
              if (!value?.trim()) {
                return "별점이 1점 또는 5점인 경우 독후감은 필수입니다";
              }
              if (value.length < 100) {
                return "별점이 1점 또는 5점인 경우 최소 100자 이상 작성해주세요";
              }
            }
            return true;
          },
        }}
      />
    </>
  );
}
