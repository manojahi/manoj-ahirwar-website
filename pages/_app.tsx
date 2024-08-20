import { metropolis } from "@/lib/fontMapper";
import "@/styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className={metropolis.className}>
      <Component {...pageProps} />
    </div>
  );
}
