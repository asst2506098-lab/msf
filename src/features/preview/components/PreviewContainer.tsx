import { usePreview } from "../hooks/usePreview";
import { BookPreviewCard } from "./BookPreviewCard";

export function PreviewContainer() {
  const { formData } = usePreview();
  return (
    <div>
      <h2>실시간 미리보기</h2>
      <BookPreviewCard formData={formData} />
    </div>
  );
}
