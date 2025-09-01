import { BookFormLayout } from "../../features/bookForm/components/layout/BookFormLayout";
import { useBookFormRouter } from "../../features/bookForm/hooks/useBookFormRouter";
import { useBookFormData } from "../../features/bookForm/hooks/useBookFormData";
import { BOOK_FORM_STEPS } from "../../features/bookForm/constants/steps";
import { getStepMetaByIndex } from "@/features/bookForm/utils/steps";
import { FormProvider, useForm } from "react-hook-form";
import { SubmitFormData } from "@/features/bookForm/types/basicStep";
import { TOTAL_STEPS } from "../../features/bookForm/constants/steps";
import { DEFAULT_FORM_DATA } from "../../features/bookForm/constants/sessionStorage";
import { useRouter } from "next/router";

export default function NewBookStepPage() {
  const nav = useBookFormRouter();
  const methods = useForm<SubmitFormData>({
    mode: "onChange",
    defaultValues: DEFAULT_FORM_DATA,
  });

  const { resetValue, saveFormData } = useBookFormData(methods);

  const current = nav.stepIndex + 1;
  const CurrentStep = getStepMetaByIndex(nav.stepIndex)?.component ?? null;
  const router = useRouter();
  const handleNext = async () => {
    const isValid = await methods.trigger(
      BOOK_FORM_STEPS[nav.stepIndex].fields
    );
    if (isValid) {
      saveFormData();
      nav.goNext();
    }
  };

  const handleSubmit = () => {
    saveFormData();
    alert("제출");
    resetValue();
    router.push("/books/basic");
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
          onSubmit={handleSubmit}
        />
      </BookFormLayout>
    </FormProvider>
  );
}
