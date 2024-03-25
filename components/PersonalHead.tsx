import Head from "next/head";

export default function PersonalHead() {
  return (
    <>
        <meta name="apple-mobile-web-app-title" content="Seunghun's Dev Log" />
        <meta name="format-detection" content="telephone=no" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="white" />
        <meta name="viewport" content="initial-scale=1, viewport-fit=cover" />
        <meta name="msapplication-TileColor" content="#fff" />
        <meta name="msapplication-tap-highlight" content="no" />
        <meta name="theme-color" content="#fff" />
        <link rel="shortcut icon" href="/favicon.ico" />
    </>
  )
}