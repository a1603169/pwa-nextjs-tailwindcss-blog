import "@/styles/reset.css";
import * as gtag from "../lib/gtag";
import { useRouter } from "next/router";
import { useEffect } from "react";
import type { AppProps } from "next/app";
import WebLayout from "@/components/WebLayout";
import Head from "next/head";

export default function App({ Component, pageProps }: AppProps) {

  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = (url: URL) => {
      gtag.pageview(url);
    };
    router.events.on('routeChangeComplete', handleRouteChange);
    router.events.on('hashChangeComplete', handleRouteChange);
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
      router.events.off('hashChangeComplete', handleRouteChange);
    };
  }, [router.events]);


  return (
    <>
      <Head>
        <title>NOT JUST A DEVELOPER</title>
        <script
          async
          src={`https://www.googletagmanager.com/gtag/js?id=${gtag.GA_TRACKING_ID}`}
        ></script>
        <script
          id="gtag-init"
          dangerouslySetInnerHTML={{
            __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${gtag.GA_TRACKING_ID}', {
              page_path: window.location.pathname,
            });
          `,
          }}
        />
        <meta
          name="description"
          content="Welcome to my world. I am a Software Engineer who always find something funny!"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <WebLayout>
        <Component {...pageProps} className="relative" />
      </WebLayout>
    </>
  );
}
