import { LangugeContext } from "@/context/langugeContext";
import { Combobox, Transition } from "@headlessui/react";
import { Fragment, useContext, useState } from "react";
import { HiChevronUpDown, HiOutlineCheck } from "react-icons/hi2";

const SelecteSearchBox = ({ title, datas, setValue, titleStyle, boxStyle,value }) => {
  const [selected, setSelected] = useState(value?datas.find(item=>item.name==value): datas[0]);
  const [query, setQuery] = useState("");

  
  const lang = useContext(LangugeContext)

  const filteredPeople =
    query === ""
      ? datas
      : datas.filter((data) =>
          data.name
            .toLowerCase()
            .replace(/\s+/g, "")
            .includes(query.toLowerCase().replace(/\s+/g, ""))
        );

  return (
    <div className="w-full h-auto">
      <div className={` ${titleStyle ? titleStyle : lang.isBangla ? "text-defult bfont text-2xl font-semibold":"text-defult text-lg font-semibold" }`}>{title}</div>
      <Combobox
        value={selected}
        onChange={(e) => {
          setValue(e);
          setSelected(e);
        }}
      >
        <div className="relative mt-1">
          <div className={` relative w-full border border-defult cursor-default overflow-hidden rounded-lg bg-white text-left shadow-4xl focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-teal-300 sm:text-sm`}>
            <Combobox.Input
              className={`${boxStyle ?boxStyle: "py-[12px] pl-3 pr-10 text-sm leading-5"}  w-full border-none  text-gray-900 outline-none focus:ring-0`}
              displayValue={(data) => data.name}
              onChange={(event) => setQuery(event.target.value)}
            />
            <Combobox.Button className="absolute inset-y-0 right-0 flex items-center pr-2">
              <HiChevronUpDown
                className="h-6 w-6 text-defult"
                aria-hidden="true"
              />
            </Combobox.Button>
          </div>
          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
            afterLeave={() => setQuery("")}
          >
            <Combobox.Options className="absolute mt-1 max-h-60 w-full overflow-auto scrollbar rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm z-50">
              {filteredPeople.length === 0 && query !== "" ? (
                <div className="relative cursor-default select-none py-2 px-4 text-gray-700">
                  Nothing found.
                </div>
              ) : (
                filteredPeople.map((data,indexNum) => (
                  <Combobox.Option
                  
                    key={indexNum}
                    className={({ active }) =>
                      `relative cursor-default select-none py-2 pl-10 pr-4 z-50 ${
                        active ? "bg-defult text-white" : "text-gray-800"
                      }`
                    }
                    value={data}
                  >
                    {({ selected, active }) => (
                      <>
                        <span
                          className={`block truncate ${
                            selected ? "font-medium" : "font-normal"
                          }`}
                          title={data.name}
                        >
                          {data.name}
                        </span>
                        {selected ? (
                          <span
                            className={`absolute inset-y-0 left-0 flex items-center pl-3 ${
                              active ? "text-white" : "text-teal-600"
                            }`}
                          >
                            <HiOutlineCheck
                              className="h-5 w-6"
                              aria-hidden="true"
                            />
                          </span>
                        ) : null}
                      </>
                    )}
                  </Combobox.Option>
                ))
              )}
            </Combobox.Options>
          </Transition>
        </div>
      </Combobox>
    </div>
  );
};

export default SelecteSearchBox;
