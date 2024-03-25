import "@/styles/reset.css";
import { Analytics } from '@vercel/analytics/react';
// import * as gtag from "../lib/gtag";
// import { useRouter } from "next/router";
// import { useEffect } from "react";
// Deprecated 
import type { AppProps } from "next/app";
import WebLayout from "@/components/WebLayout";
import Head from "next/head";
import PersonalHead from "@/components/PersonalHead";

export default function App({ Component, pageProps }: AppProps) {

  return (
    <>
      <Head>
        <title>NOT JUST A DEVELOPER</title>
        <link rel="manifest" href="/manifest.json" />
        <meta
          name="description"
          content="Welcome to my world. I am a Software Engineer who always find something funny!"
        />
        <link rel="icon" href="/favicon.ico" />
        <PersonalHead />
      </Head>
      <WebLayout>
        <Analytics />
        <Component {...pageProps} className="relative" />
      </WebLayout>
    </>
  );
}
