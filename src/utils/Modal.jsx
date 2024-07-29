import { ModalContext } from "@/context/ModalContext";
import { useContext } from "react";
import { CgCloseO } from "react-icons/cg";

const Modal = ({ children }) => {
  const modal = useContext(ModalContext);
  return (
    <div
      className={`fixed w-full h-full backdrop-blur-md bg-white/60 shadow-3xl top-0 left-0 right-0 z-40 flex justify-center align-middle items-center p-4 pt-12 transition-all duration-200 ${
        modal.isOpen ? "mt-[0px]" : "-mt-[2500px]"
      }`}
    >
      <div className="container p-4 bg-white shadow-4xl rounded-lg h-[calc(100%-40px)] relative">
        <CgCloseO
          className="absolute w-8 h-8 top-1 right-1 cursor-pointer text-defult"
          onClick={() => modal.close()}
        />
        <div className="h-[calc(100%-0px)] overflow-auto scrollbar">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Modal;
