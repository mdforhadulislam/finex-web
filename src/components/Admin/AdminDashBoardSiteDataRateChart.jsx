import { LoadingContext } from "@/context/LoadingContext";
import {
  COUNTRY_API,
  deleteRequestSend,
  getRequestSend,
  PRICE_API,
  SINGLE_PRICE_API,
} from "@/data/ApiMethod";
import SelecteSearchBox from "@/utils/SelecteSearchBox";
import { useRouter } from "next/router";
import React, { useContext, useEffect, useState } from "react";
import { FiEdit } from "react-icons/fi";
import { MdDeleteOutline } from "react-icons/md";
import { toast } from "react-toastify";

const AdminDashBoardSiteDataRateChart = () => {
  const [allCountry, setAllCountry] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState({ from: "", to: "" });
  const [allRateChart, setAllRateChart] = useState([]);

  const loading = useContext(LoadingContext);
  const router = useRouter();

  const rateChartCreateHandler = () => {
    if (selectedCountry.from && selectedCountry.to) {
      router.push(
        `/admin/site-data/${selectedCountry.from}/${selectedCountry.to}/`
      );
    } else {
      toast.error("Plz! selecte Ship Country");
    }
  };
  const deleteRateChart = (id) => {
    loading.loadingStart();
    deleteRequestSend(SINGLE_PRICE_API(id)).then((res) => {
      loading.loadingEnd();
      if (res.status == 200) {
        toast.success(res.message);
        getRequestSend(PRICE_API).then((res) => {
          if (res.status == 200) {
            setAllRateChart(res.data);
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
    getRequestSend(PRICE_API).then((res) => {
      if (res.status == 200) {
        setAllRateChart(res.data);
      }
    });
  }, []);
  return (
    <div className="w-full h-auto py-2" id="createratechart">
      <div className=" w-full h-auto p-2 pb-8 shadow-3xl rounded-md">
        <div className="w-full h-auto py-1 mb-2">
          <h1 className="font-semibold text-lg justify-center text-center align-middle items-center">
            Rate Chart
          </h1>
        </div>

        {/* rate chart list  */}
        <div className="w-full h-auto px-2 py-2 flex flex-col gap-2">
          {allRateChart?.map((singlePrice) => (
            <div
              key={singlePrice?._id}
              className="w-full h-auto p-1 py-[6px] text-center hover:bg-gray-100 transition duration-300 rounded-md shadow-3xl relative"
            >
              <h1 className=" text-base font-semibold">
                {singlePrice?.from?.country.toLocaleUpperCase()} TO{" "}
                {singlePrice?.to?.country.toLocaleUpperCase()}{" "}
                <span className="w-[20px] inline-block"></span> Careated Date:-{" "}
                {new Date(singlePrice?.createdAt).toLocaleDateString()}{" "}
              </h1>
              <div className="flex gap-1 absolute right-0 z-10 top-[3%] items-center align-middle">
                <MdDeleteOutline
                  onClick={() => deleteRateChart(singlePrice?._id)}
                  className="w-8 h-8 p-1 text-red-600 hover:bg-white rounded-md"
                />
                <FiEdit
                  onClick={() =>
                    router.push(
                      `/admin/site-data/${singlePrice.from.id}/${singlePrice.to.id}/?chartId=${singlePrice?._id}&edit=true`
                    )
                  }
                  className="w-8 h-8 p-[6px] text-green-600 hover:bg-white rounded-md"
                />
              </div>
            </div>
          ))}
        </div>

        {/* ratechart create */}
        <div className="w-full h-auto py-1 pt-5 mb-2">
          <h1 className="font-semibold text-base justify-center text-center align-middle items-center">
            Create Chart
          </h1>
        </div>

        <div className="w-full h-auto flex-col sm:flex-row  flex gap-3 items-end align-middle justify-center">
          <div className="w-full sm:flex-row flex-col flex gap-2">
            <SelecteSearchBox
              titleStyle={"text-sm"}
              boxStyle={"px-3 py-1 text-sm"}
              datas={allCountry?.filter((item) =>
                item?.name?.toLowerCase().includes("bangladesh")
              )}
              title={"Ship From"}
              setValue={(e) => {
                setSelectedCountry({ ...selectedCountry, from: e._id });
              }}
            />

            <SelecteSearchBox
              titleStyle={"text-sm"}
              boxStyle={"px-3 py-1 text-sm"}
              datas={allCountry?.filter(
                (item) => !item?.name?.toLowerCase().includes("bangladesh")
              )}
              title={"Ship To"}
              setValue={(e) => {
                setSelectedCountry({ ...selectedCountry, to: e._id });
              }}
            />
          </div>
          <button
            onClick={rateChartCreateHandler}
            className="w-full sm:w-[220px] bg-defult-button text-base rounded-md text-white py-1 px-2"
            type="submit"
          >
            Create
          </button>
        </div>
      </div>
    </div>
  );
};

export default AdminDashBoardSiteDataRateChart;
