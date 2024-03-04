import "@/styles/reset.css";
import { Analytics } from '@vercel/analytics/react';
// import * as gtag from "../lib/gtag";
// import { useRouter } from "next/router";
// import { useEffect } from "react";
// Deprecated 
import type { AppProps } from "next/app";
import WebLayout from "@/components/WebLayout";
import Head from "next/head";

export default function App({ Component, pageProps }: AppProps) {

  return (
    <>
      <Head>
        <title>NOT JUST A DEVELOPER</title>
        <link rel="manifest" href="/manifest.json" />
        <meta name="viewport" content="initial-scale=1, viewport-fit=cover, width=device-width"></meta>
        <meta name="apple-mobile-web-app-capable" content="yes"></meta>
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent"></meta>
        <meta
          name="description"
          content="Welcome to my world. I am a Software Engineer who always find something funny!"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <WebLayout>
        <Analytics />
        <Component {...pageProps} className="relative" />
      </WebLayout>
    </>
  );
}
