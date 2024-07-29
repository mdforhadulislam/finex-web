import { LangugeContext } from "@/context/langugeContext";
import { useContext } from "react";

const LangugeToggolButton = () => {
  const languge = useContext(LangugeContext);
  return (
    <button
      className={"px-1 py-2 text-center text-[16px] shadow  hover:bg-defult-800 bg-defult-button text-white transition duration-300 block rounded-md w-full"}
      onClick={() => {
        languge.isEnglish
          ? languge.bangla()
          : languge.isBangla
          ? languge.english()
          : null;
      }}
    >
      Read in {languge.isEnglish && "Be"} {languge.isBangla && "En"}
    </button>
  );
};

export default LangugeToggolButton;
