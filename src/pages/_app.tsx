import { PreviewPlaceholder } from "@/features/preview/components/PreviewPlaceholder";
import { useResponsive } from "@/shared/hooks/useResponsive";
import type { AppProps } from "next/app";

export default function MyApp({ Component, pageProps }: AppProps) {
  const { isAppVisible } = useResponsive();

  if (!isAppVisible) {
    return <PreviewPlaceholder />;
  }
  return <Component {...pageProps} />;
}
