import "../fonts/Montserrat/stylesheet.css"; // include fonts montserrat
import "../styles/variable.css";
import "../styles/globals.css";
import type { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
