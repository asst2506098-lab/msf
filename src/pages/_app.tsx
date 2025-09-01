import { PreviewPlaceholder } from "@/features/preview/components/PreviewPlaceholder";
import { useResponsive } from "@/shared/hooks/useResponsive";
import type { AppProps } from "next/app";

export default function MyApp({ Component, pageProps }: AppProps) {
  const { isAppVisible, isClient } = useResponsive();

  if (!isClient) {
    return <Component {...pageProps} />;
  }

  if (!isAppVisible) {
    return <PreviewPlaceholder />;
  }

  return <Component {...pageProps} />;
}
