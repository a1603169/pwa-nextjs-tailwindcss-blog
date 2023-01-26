import "@/styles/reset.css";
import type { AppProps } from "next/app";
import WebLayout from "@/components/WebLayout";
export default function App({ Component, pageProps }: AppProps) {
  return (
    <WebLayout>
      <Component {...pageProps} />
    </WebLayout>
  );
}
