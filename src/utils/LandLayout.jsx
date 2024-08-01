import FooterBar from "@/components/Footer/FooterBar";
import NavBar from "@/components/NavBar/NavBar";
import { getRequestSend, HEALTH_API } from "@/data/ApiMethod";
import { useEffect } from "react";
import { ToastContainer } from "react-toastify";
import Spinner from "./Spinner";

const LandLayout = ({ children }) => {
  
  useEffect(() => {
    getRequestSend(HEALTH_API).then((res) => {});
  });


  return (
    <>
      <NavBar />
      <div className="w-full h-[55px] lg:h-[60px]"></div>
      {children}
      <FooterBar />
      <ToastContainer />
      <Spinner />
    </>
  );
};

export default LandLayout;
