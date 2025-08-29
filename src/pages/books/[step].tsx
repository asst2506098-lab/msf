import { BookFormLayout } from "../../features/bookForm/components/BookFormLayout";
import { useBookFormRouter } from "../../features/bookForm/hooks/useBookFormRouter";
import { BOOK_FORM_STEPS } from "../../features/bookForm/constants/steps";
import { getStepMetaByIndex } from "@/features/bookForm/utils/steps";

export default function NewBookStepPage() {
  const nav = useBookFormRouter();

  const current = nav.stepIndex + 1;
  const total = BOOK_FORM_STEPS.length;
  const CurrentStep = getStepMetaByIndex(nav.stepIndex)?.component ?? null;

  return (
    <main>
      <BookFormLayout>
        <BookFormLayout.Header
          current={current}
          total={total}
          title={nav.meta.title}
          description={nav.meta.description}
        />
        <BookFormLayout.Content>
          {CurrentStep ? <CurrentStep /> : null}
        </BookFormLayout.Content>
        <BookFormLayout.Footer
          isFirst={nav.isFirst}
          isLast={nav.isLast}
          onFirst={nav.goFirst}
          onPrev={nav.goPrev}
          onNext={nav.goNext}
          onSubmit={() => {
            alert("제출");
          }}
        />
      </BookFormLayout>
    </main>
  );
}
