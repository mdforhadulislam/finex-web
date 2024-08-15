import AuthContextProvider from "@/context/AuthContext";
import LangugeContextProvider from "@/context/langugeContext";
import LoadingContextProvider from "@/context/LoadingContext";
import ModalContextProvider from "@/context/ModalContext";
import "@/styles/globals.css";
import AppLayout from "@/utils/AppLayout";
import LandLayout from "@/utils/LandLayout";
import { useRouter } from "next/router";
import "react-toastify/dist/ReactToastify.css";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

export default function App({ Component, pageProps }) {
  const { pathname } = useRouter();
  const pathName = pathname.split("/")[1];



  if (pathName == "user" || pathName == "admin" || pathName == "staff") {
    return (
      <AuthContextProvider>
        <LoadingContextProvider>
          <LangugeContextProvider>
            <ModalContextProvider>
              <AppLayout>
                <Component {...pageProps} />
              </AppLayout>
            </ModalContextProvider>
          </LangugeContextProvider>
        </LoadingContextProvider>
      </AuthContextProvider>
    );
  }

  if (pathName == "auth") {
    return (
      <AuthContextProvider>
        <LoadingContextProvider>
          <LangugeContextProvider>
            <ModalContextProvider>
              <Component {...pageProps} />
            </ModalContextProvider>
          </LangugeContextProvider>
        </LoadingContextProvider>
      </AuthContextProvider>
    );
  }

  return (
    <AuthContextProvider>
      <LoadingContextProvider>
        <LangugeContextProvider>
          <ModalContextProvider>
            <LandLayout>
              <Component {...pageProps} />
            </LandLayout>
          </ModalContextProvider>
        </LangugeContextProvider>
      </LoadingContextProvider>
    </AuthContextProvider>
  );
}
