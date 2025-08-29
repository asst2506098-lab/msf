import { useRouter } from "next/router";

export default function NewBookStepPage() {
  const router = useRouter();
  const { step } = router.query;

  return (
    <main>
      <h1>New Book - Step {String(step ?? "")}</h1>
      <p>멀티 스텝 폼의 더미 페이지입니다.</p>
    </main>
  );
}
