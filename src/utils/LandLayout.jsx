import FooterBar from "@/components/Footer/FooterBar";
import NavBar from "@/components/NavBar/NavBar";
import { ToastContainer } from "react-toastify";
import Spinner from "./Spinner";
import { useContext, useEffect } from "react";
import { LoadingContext } from "@/context/LoadingContext";
import { getRequestSend, HEALTH_API } from "@/data/ApiMethod";

const LandLayout = ({ children }) => {
  const loading = useContext(LoadingContext);
  
  useEffect(() => {
    getRequestSend(HEALTH_API).then((res) => {
     loading.loadingEnd()
    });
  });


  return (
    <div className="scrollbar">
      <NavBar />
      <div className="w-full h-[55px] lg:h-[60px]"></div>
      {children}
      <FooterBar />
      <ToastContainer />
      <Spinner />
    </div>
  );
};

export default LandLayout;
