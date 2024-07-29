import { LangugeContext } from "@/context/langugeContext";
import { useContext } from "react";

const IsEnglish = ({ className, children }) => {
  const languge = useContext(LangugeContext);
  return (
    <span className={` ${languge.isEnglish ? className : "hidden"}`}>
      {children}
    </span>
  );
};
export default IsEnglish;
