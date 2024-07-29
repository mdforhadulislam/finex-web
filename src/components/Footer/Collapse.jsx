import { LangugeContext } from "@/context/langugeContext";
import { Disclosure } from "@headlessui/react";
import React, { useContext } from "react";
import { BiPlus } from "react-icons/bi";

const Collapse = ({ title, children }) => {
  const lang = useContext(LangugeContext)


  return (
    <div className="w-full border-t border-gray-300">
      <Disclosure>
        {({ open }) => (
          <>
            <Disclosure.Button className="flex group justify-between w-full pt-4 text-sm font-medium text-left outline-none focus:outline-none">
              <span className={`transition-colors duration-300 group-hover:text-primary ${lang.isBangla ? "bfont text-2xl":"text-xl "}`}>
                {title}
              </span>
              <BiPlus
                className={`${
                  open ? "transform rotate-45" : ""
                } text-3xl md:text-4xl transition duration-300 group-hover:text-primary`}
              />
            </Disclosure.Button>
            <Disclosure.Panel className="pt-2 pb-4 text-gray-700 dark:text-gray-400 lg:text-lg">
              {children}
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
    </div>
  );
};

export default React.memo(Collapse);