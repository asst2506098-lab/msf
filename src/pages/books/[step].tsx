import { BookFormLayout } from "../../features/bookForm/components/layout/BookFormLayout";
import { useBookFormRouter } from "../../features/bookForm/hooks/useBookFormRouter";
import { BOOK_FORM_STEPS } from "../../features/bookForm/constants/steps";
import { getStepMetaByIndex } from "@/features/bookForm/utils/steps";
import { FormProvider, useForm } from "react-hook-form";
import { SubmitFormData } from "@/features/bookForm/types/basicStep";
import { TOTAL_STEPS } from "../../features/bookForm/constants/steps";

export default function NewBookStepPage() {
  const nav = useBookFormRouter();
  const methods = useForm<SubmitFormData>({
    mode: "onChange",
    defaultValues: {
      bookTitle: "",
      author: "",
      publisher: "",
      publishedDate: "",
      totalPages: 0,
      readingStatus: "want_to_read",
      readingStartDate: "",
      readingEndDate: "",
      isRecommended: false,
      rating: 0,
      review: "",
      quotes: [],
      isPublic: false,
    },
  });

  const current = nav.stepIndex + 1;
  const CurrentStep = getStepMetaByIndex(nav.stepIndex)?.component ?? null;
  const handleNext = async () => {
    const isValid = await methods.trigger(
      BOOK_FORM_STEPS[nav.stepIndex].fields
    );
    if (isValid) {
      nav.goNext();
    }
  };

  return (
    <FormProvider {...methods}>
      <BookFormLayout>
        <BookFormLayout.Header
          current={current}
          total={TOTAL_STEPS}
          title={nav.meta.title}
          description={nav.meta.description}
        />
        <BookFormLayout.Content>
          {CurrentStep && <CurrentStep />}
        </BookFormLayout.Content>
        <BookFormLayout.Footer
          isFirst={nav.isFirst}
          isLast={nav.isLast}
          onFirst={nav.goFirst}
          onPrev={nav.goPrev}
          onNext={handleNext}
          onSubmit={() => {
            alert("제출");
          }}
        />
      </BookFormLayout>
    </FormProvider>
  );
}
