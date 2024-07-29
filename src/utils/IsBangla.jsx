import { LangugeContext } from "@/context/langugeContext";
import { useContext } from "react";

const IsBangla = ({ className, children }) => {
  const languge = useContext(LangugeContext);
  return (
    <span className={` ${languge.isBangla ? className : "hidden"}`}>
      {children}
    </span>
  );
};

export default IsBangla;
