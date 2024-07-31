import React, { useContext, useEffect } from "react";
import { ToastContainer } from "react-toastify";
import Spinner from "./Spinner";
import Image from "next/image";

import DeliveryMan from "../public/delivery-man.png";
import AuthContextProvider, { AuthContext } from "@/context/AuthContext";
import LoadingContextProvider, { LoadingContext } from "@/context/LoadingContext";
import { useRouter } from "next/router";
import { getRequestSend, HEALTH_API } from "@/data/ApiMethod";

const AuthLayout = ({ children }) => {

  const router = useRouter();
  const authContext = useContext(AuthContext);


  useEffect(()=>{

    if (authContext.isUserLogedIn) {
      router.push("/user");
    }

  })
  return (
    <>
      <AuthContextProvider>
          <div className="absolute top-0 left-0 bg-gradient-to-b from-defult bg-defult to-gray-700 bottom-0 leading-5 h-full w-full overflow-hidden flex flex-col"></div>
          <ToastContainer />
          <div className="relative   min-h-screen  sm:flex sm:flex-row flex flex-col justify-center align-middle items-center bg-transparent rounded-3xl shadow-xl z-50">
            <div className="flex-col flex justify-center align-middle items-center  self-center lg:px-5 sm:max-w-md xl:max-w-md  z-10">
              <div className="self-start items-center align-middle justify-center hidden sm:flex flex-col  text-gray-300">
                <Image
                  width={380}
                  height={420}
                  src={DeliveryMan?.src}
                  alt="DeliveryMan"
                />
              </div>
            </div>
            <div className="flex justify-center self-center  z-10 p-0 sm:p-4  flex-col align-middle items-center">
              {children}
            </div>
          </div>

          <svg
            className="absolute bottom-0 left-0 "
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1440 320"
          >
            <path
              fill="#fff"
              fillOpacity="1"
              d="M0,0L40,42.7C80,85,160,171,240,197.3C320,224,400,192,480,154.7C560,117,640,75,720,74.7C800,75,880,117,960,154.7C1040,192,1120,224,1200,213.3C1280,203,1360,149,1400,122.7L1440,96L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"
            ></path>
          </svg>
      </AuthContextProvider>
    </>
  );
};

export default AuthLayout;
