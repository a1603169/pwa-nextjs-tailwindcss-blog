import Head from "next/head";

export default function PersonalHead() {
  return (
    <>
      <meta name="viewport" content="initial-scale=1, viewport-fit=cover, width=device-width"></meta>
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent"></meta>
        <meta name="apple-mobile-web-app-title" content="Seunghun's Dev Log" />
        <meta name="format-detection" content="telephone=no" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="msapplication-TileColor" content="#b0aceb" />
        <meta name="msapplication-tap-highlight" content="no" />
        <meta name="theme-color" content="#000000" />
        <link rel="shortcut icon" href="/favicon.ico" />
    </>
  )
}