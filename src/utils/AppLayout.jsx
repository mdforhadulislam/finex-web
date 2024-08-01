import AppBar from "@/components/NavBar/AppBar";
import DragBar from "@/components/NavBar/DragBar";
import { AuthContext } from "@/context/AuthContext";
import { useRouter } from "next/router";
import { useContext, useState } from "react";
import { ToastContainer } from "react-toastify";
import Spinner from "./Spinner";

const AppLayout = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const authContext = useContext(AuthContext);

  const router = useRouter();
  const { pathname } = useRouter();
  const pathName = pathname.split("/")[1];

  if (!authContext.isUserLogedIn) {
    router.push("/auth/login");
  }

  if (authContext.userRole == "user") {
    if (pathName == "admin" || pathName == "staff") {
      router.push("/user");
    }
  }

  if (authContext.userRole == "staff") {
    if (pathName == "admin" || pathName == "user") {
      router.push("/staff");
    }
  }

  if (authContext.userRole == "admin") {
    if (pathName == "staff" || pathName == "user") {
      router.push("/admin");
    }
  }

  return (
    <>
      <AppBar isOpen={isOpen} setIsOpen={setIsOpen} />
      <div className="w-full h-[55px] lg:h-[65px]"></div>
      <div className="w-full h-auto p-2">
        <div className="w-full h-auto shadow-3xl p-2  rounded-md">
          {children}
        </div>
      </div>
      <DragBar isOpen={isOpen} setIsOpen={setIsOpen} />
      <ToastContainer />
      <Spinner />
    </>
  );
};

export default AppLayout;
