import { Checkbox } from "@/shared/components";

export function VisibilityStep() {
  return (
    <>
      <Checkbox
        name="isPublic"
        label="이 독서 기록을 공개하시겠습니까?"
        rules={{ required: "공개 여부를 선택해주세요" }}
      />

      <p>공개 시 다른 사용자들이 이 독서 기록을 볼 수 있습니다.</p>
    </>
  );
}
