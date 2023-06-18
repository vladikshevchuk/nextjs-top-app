import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";

export default function App({ Component, pageProps, router }: AppProps): JSX.Element {
  return (
    <>
      <Head>
        <title>My Top App</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Sans:wght@200;300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        ></link>
        <meta name="og:url" content={process.env.NEXT_PUBLIC_DOMAIN + router.asPath} />
        <meta name="og:local" content="ru_RU" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}
