import { metropolis } from "@/lib/fontMapper";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Script from "next/script";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className={metropolis.className}>
      <Script
        strategy="lazyOnload"
        src="https://www.googletagmanager.com/gtag/js?id=G-GY1LWHNZ8Z"
      />

      <Script strategy="lazyOnload">
        {`
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'G-GY1LWHNZ8Z', {
        page_path: window.location.pathname,
        });
    `}
      </Script>
      <Component {...pageProps} />
    </div>
  );
}
