import { AuthContext } from '@/context/AuthContext';
import Logo from '@/utils/Logo';
import Link from 'next/link';
import React, { useContext } from 'react'
import { HiMenuAlt3 } from "react-icons/hi";

const AppBar = ({ isOpen, setIsOpen }) => {
    const authContext = useContext(AuthContext);

    return (
      <div className=" backdrop-blur-md bg-white/60 shadow-3xl  px-3 py-1 fixed w-full z-40">
        <div className="flex items-center justify-between align-middle">
          <div
            tag="div"
            className="md:flex hidden items-center justify-start align-middle w-[calc(10%-120px)]"
          >
            <Link
              href={` ${
                authContext?.user?.role == "admin"
                  ? "/admin"
                  : authContext?.user?.role == "user"
                  ? "/user"
                  : authContext?.user?.role == "staff"
                  ? "/staff"
                  : "/"
              } `}
              className=" text-3xl font-bold italic text-defult"
            >
              FINEX
            </Link>
          </div>
          <div>
            {authContext?.user?.role == "admin" && (
              <Logo link={"/admin"} imageStyle={"w-[120px] h-[45px]"} />
            )}
            {authContext?.user?.role == "user" && (
              <Logo link={"/user"} imageStyle={"w-[120px] h-[45px]"} />
            )}
            {authContext?.user?.role == "staff" && (
              <Logo link={"/staff"} imageStyle={"w-[120px] h-[45px]"} />
            )}
          </div>
  
          <div className="cursor-pointer hover:bg-defult-100 transition-all rounded-md">
            <button
              className="inline-flex items-center p-1 ml-1 py-[6px] px-3 bg-defult-button  rounded-lg text-white shadow-3xl  focus:outline-none"
              onClick={() => setIsOpen(!isOpen)}
            >MENU</button>
          </div>
        </div>
      </div>
    );
}

export default AppBar