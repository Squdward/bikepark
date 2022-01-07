import "../fonts/Montserrat/stylesheet.css"; // include fonts montserrat
import "../styles/variable.css";
import "../styles/globals.css";
import "flatpickr/dist/themes/airbnb.css"; // DayRange
import "../styles/DayRange.css"; // DayRange
import type { AppProps } from "next/app";
import {Provider} from "react-redux";
import store from "../redux/store";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;
