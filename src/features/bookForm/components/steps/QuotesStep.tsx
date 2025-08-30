import { useFormContext, useFieldArray } from "react-hook-form";
import { TextInput, NumberInput, Button } from "@/shared/components";
import { SubmitFormData } from "../../types/basicStep";

export function QuotesStep() {
  const { watch, control, getValues } = useFormContext<SubmitFormData>();
  const { fields, append, remove } = useFieldArray({
    control,
    name: "quotes",
  });

  const totalPages = watch("totalPages");

  const addQuote = () => {
    append({ content: "", page: null });
  };

  const removeQuote = (index: number) => {
    remove(index);
  };

  return (
    <>
      <Button type="button" onClick={addQuote}>
        인용구 추가
      </Button>

      {fields.map((field, index) => (
        <div key={field.id}>
          <TextInput
            name={`quotes.${index}.content`}
            label={`인용구 ${index + 1}`}
            placeholder="인용구를 입력하세요"
            required
            rules={{ required: "인용구 내용은 필수입니다" }}
          />
          {fields.length > 1 && (
            <NumberInput
              name={`quotes.${index}.pageNumber`}
              label="페이지 번호"
              placeholder="페이지 번호를 입력하세요"
              required
              min={1}
              max={totalPages}
              rules={{
                required: "페이지 번호는 필수입니다",
                min: { value: 1, message: "페이지 번호는 1 이상이어야 합니다" },
                max: {
                  value: totalPages,
                  message: `페이지 번호는 ${totalPages} 이하여야 합니다`,
                },
                validate: (value: number) => {
                  const currentTotalPages = getValues("totalPages");
                  if (value > currentTotalPages) {
                    return `페이지 번호는 ${currentTotalPages} 이하여야 합니다`;
                  }
                  return true;
                },
              }}
            />
          )}
          <Button type="button" onClick={() => removeQuote(index)}>
            삭제
          </Button>
        </div>
      ))}
    </>
  );
}
