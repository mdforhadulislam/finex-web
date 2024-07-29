import { LangugeContext } from "@/context/langugeContext";
import { useContext } from "react";

const MenuButton = ({ action }) => {
  const lang = useContext(LangugeContext)
  return (
    <button
      type="button"
      className={`inline-flex items-center p-1 ml-1 py-2 px-[6px] bg-defult  rounded-lg lg:hidden text-white shadow-3xl  focus:outline-none ${lang.isBangla ? "bfont text-xl py-[6px]":"text-base" }`}
      onClick={action}
    >
      {lang.isEnglish && "Menu" }
      {lang.isBangla && "মেনু" }
      
    </button>
  );
};

export default MenuButton