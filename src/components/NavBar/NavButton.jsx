import { LangugeContext } from "@/context/langugeContext";
import Link from "next/link";
import { useContext } from "react";

const NavButton = ({ link, title, action, style }) => {

  const lang = useContext(LangugeContext)

  return (
    <li>
      <Link
        href={link || "/"}
        title={title}
        className={`block  my-[1px] pr-2 pl-2  text-defult-button   hover:bg-defult-button  lg:text-gray-800 lg:hover:text-defult-button hover:text-white rounded lg:bg-transparent lg:p-0 transition duration-300 lg:hover:bg-[#fff0] ${style} ${lang.isBangla? "bfont text-[25px] py-[4px]":"text-[17px] py-2"}`}
        onClick={action}
      >
        {title}
      </Link>
    </li>
  );
};

export default NavButton