import { LangugeContext } from "@/context/langugeContext";
import Image from "next/image";
import Link from "next/link";
import React, { useContext } from "react";

const HeroServiceSingleBox = ({ title, icon, details }) => {
  const lang = useContext(LangugeContext);

  return (
    <div className="w-full h-full p-2 ">
      <Link
        href={"/service"}
        className="cursor-pointer w-full h-full p-4 shadow-3xl rounded-md flex flex-row items-center border"
      >
        <div className="w-[180px] h-auto">
          <Image width={100} height={100} className="w-[100px] h-[100px]" src={icon.src} alt={title} />
        </div>
        <div className="w-full h-full">
          <h1
            className={`  mb-2 text-left ${
              lang.isBangla
                ? "bfont text-3xl font-semibold"
                : "text-xl font-semibold"
            }`}
          >
            {title}
          </h1>
          <p
            className={`w-full h-auto  font-normal text-justify  ${
              lang.isBangla ? "bfont text-xl" : "text-sm"
            }`}
          >
            {details}
          </p>
        </div>
      </Link>
    </div>
  );
};

export default HeroServiceSingleBox;
