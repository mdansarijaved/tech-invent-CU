import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { useEffect } from "react";
import { Inter } from "next/font/google";
const inter = Inter({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--fontSans",
});
export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className={`${inter.variable} ${inter.className} bg-dark-black`}>
      <Component {...pageProps} />
    </div>
  );
}
