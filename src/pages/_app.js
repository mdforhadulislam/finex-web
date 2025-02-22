import "@/styles/globals.css";
import NextUiProvider from "../../utils/NextUiProvider";

export default function App({ Component, pageProps }) {
  return (
    <NextUiProvider>
      <Component {...pageProps} />
    </NextUiProvider>
  );
}
