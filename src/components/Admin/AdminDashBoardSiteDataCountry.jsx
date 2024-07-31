import { LoadingContext } from "@/context/LoadingContext";
import {
  COUNTRY_API,
  deleteRequestSend,
  getRequestSend,
  postRequestSend,
  putRequestSend,
  SINGLE_COUNTRY_API,
} from "@/data/ApiMethod";
import InputBox from "@/utils/InputBox";
import React, { useContext, useEffect, useState } from "react";
import { MdDeleteOutline } from "react-icons/md";
import { toast } from "react-toastify";
import { FiEdit } from "react-icons/fi";

const AdminDashBoardSiteDataCountry = () => {
  const [allCountry, setAllCountry] = useState([]);
  const [newCountryName, setNewCountryName] = useState("");
  const [editCountryId, setEditCountryId] = useState("");
  const [isEdit, setIsEdit] = useState(false);
  const loading = useContext(LoadingContext);

  const changeHandler = (e) => {
    setNewCountryName(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    loading.loadingStart();
    postRequestSend(COUNTRY_API, {}, { name: newCountryName }).then((res) => {
      loading.loadingEnd();
      setNewCountryName("");
      if (res.status == 200) {
        toast.success(res.message);
        getRequestSend(COUNTRY_API).then((res) => {
          if (res.status == 200) {
            setAllCountry(res.data);
          }
        });
      } else {
        toast.error(res.message);
      }
    });
  };

  const updateHandler = (id, name) => {
    setIsEdit(true);
    setNewCountryName(name);
    setEditCountryId(id);
  };

  const updateSubmitHandler = () => {
    loading.loadingStart();
    putRequestSend(
      SINGLE_COUNTRY_API(editCountryId),
      {},
      { name: newCountryName }
    ).then((res) => {
      loading.loadingEnd();
      setNewCountryName("");
      setEditCountryId("");
      setIsEdit(false);
      if (res.status == 200) {
        toast.success(res.message);
        getRequestSend(COUNTRY_API).then((res) => {
            if (res.status == 200) {
              setAllCountry(res.data);
            }
          });
      } else {
        toast.error(res.message);
      }
    });
  };

  const deleteHandler = (id) => {
    loading.loadingEnd();
    deleteRequestSend(SINGLE_COUNTRY_API(id)).then((res) => {
      loading.loadingEnd();
      if (res.status == 200) {
        toast.success(res.message);
        getRequestSend(COUNTRY_API).then((res) => {
            if (res.status == 200) {
              setAllCountry(res.data);
            }
          });
      } else {
        toast.error(res.message);
      }
    });
  };

  useEffect(() => {
    getRequestSend(COUNTRY_API).then((res) => {
      if (res.status == 200) {
        setAllCountry(res.data);
      }
    });
  }, []);

  return (
    <div className="w-full h-auto py-2" id="Country">
      <div className=" w-full h-auto p-2 shadow-3xl rounded-md">
        <div className="w-full h-auto py-1 mb-2">
          <h1 className="font-semibold text-center text-lg justify-center align-middle items-center">
            Country List
          </h1>
        </div>

        <div className="w-full h-auto flex gap-3">
          <InputBox
            type={"text"}
            name={"country"}
            placeholder={"Country Name"}
            value={newCountryName}
            action={changeHandler}
          />

          {isEdit && (
            <button
              onClick={updateSubmitHandler}
              className="w-[220px] bg-defult-button text-base rounded-md text-white py-1 px-2"
              type="submit"
            >
              Update
            </button>
          )}

          {!isEdit && (
            <button
              onClick={submitHandler}
              className="w-[220px] bg-defult-button text-base rounded-md text-white py-1 px-2"
              type="submit"
            >
              Add Country
            </button>
          )}
        </div>

        <div className="w-full flex align-middle items-center flex-col mt-3 py-3 px-1 gap-3 scrollbar">
          {allCountry?.map((country) => (
            <div
              key={country?._id}
              className="w-full h-auto p-1 py-[6px] text-center hover:bg-gray-100 transition duration-300 rounded-md shadow-3xl relative"
            >
              <h1 className=" text-base font-semibold">{country.name}</h1>
              <div className="flex gap-1 absolute right-0 z-10 top-[3%] items-center align-middle">
                <MdDeleteOutline
                  onClick={() => deleteHandler(country?._id)}
                  className="w-8 h-8 p-1 text-red-600 hover:bg-white rounded-md"
                />
                <FiEdit
                  onClick={() => updateHandler(country?._id, country?.name)}
                  className="w-8 h-8 p-[6px] text-green-600 hover:bg-white rounded-md"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AdminDashBoardSiteDataCountry;
