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
        <meta
          name="description"
          content="Welcome to my world. I am a Software Engineer who always find something funny!"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <WebLayout>
        <Component {...pageProps} className="relative" />
        <Analytics />
      </WebLayout>
    </>
  );
}
