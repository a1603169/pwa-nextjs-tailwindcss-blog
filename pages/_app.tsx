import "@/styles/reset.css";

import type { AppProps } from "next/app";
import WebLayout from "@/components/WebLayout";
import Head from "next/head";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
      <link
          href="https://cdnjs.cloudflare.com/ajax/libs/prism-themes/1.9.0/prism-vsc-dark-plus.min.css"
          rel="stylesheet"
        />
        <title>NOT JUST A DEVELOPER</title>
        <meta name="description" content="Welcome to my world. I am a Software Engineer who always find something funny!" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <WebLayout>
        <Component {...pageProps} className="relative"/>
      </WebLayout>
    </>
  );
}
