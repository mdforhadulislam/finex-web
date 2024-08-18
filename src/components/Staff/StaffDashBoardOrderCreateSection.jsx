"use client";
import { getRequestSend, PRICE_API } from "@/data/ApiMethod";
import SelecteSearchBox from "@/utils/SelecteSearchBox";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";

const StaffDashBoardOrderCreateSection = () => {
  const [priceChart, setPriceChart] = useState([]);
  const [selectedDestination, setSeletedDestination] = useState({
    from: "",
    to: "",
    priceID: "",
  });

  const router = useRouter();

  const createHandler = () => {
    if (
      selectedDestination.from &&
      selectedDestination.to &&
      selectedDestination.priceID
    ) {
      router.push(`/staff/order/${selectedDestination.priceID}`);
    } else {
      toast.error("Selete Bangladesh to Destination Country");
    }
  };

  useEffect(() => {
    getRequestSend(PRICE_API).then((res) => {
      if (res.status == 200) {
        setPriceChart(res.data);
      }
    });
  }, []);
  return (
    <div className="w-full h-auto py-2" id="createOrder">
      <div className=" w-full h-auto p-2 shadow-3xl rounded-md">
        <div className="w-full h-auto py-1 mb-2">
          <h1 className="font-semibold text-center text-lg justify-center align-middle items-center">
            Order Create
          </h1>
        </div>

        <div className="w-full h-auto flex-col sm:flex-row  flex gap-3 items-end align-middle justify-center pb-48">
          <div className="w-full sm:flex-row flex-col flex gap-2">
            <SelecteSearchBox
              titleStyle={"text-sm"}
              boxStyle={"px-3 py-1 text-sm"}
              datas={priceChart?.map((item) => {
                return {
                  name: `${item.from.country} - TO - ${item.to.country}`,
                  id: item._id,
                  from: item.from.id,
                  to: item.to.id,
                };
              })}
              setValue={(e) => {
                setSeletedDestination({
                  from: e.from,
                  to: e.to,
                  priceID: e.id,
                });
              }}
            />
          </div>
          <button
            className="w-full sm:w-[220px] bg-defult-button text-base rounded-md text-white py-1 px-2"
            type="submit"
            onClick={createHandler}
          >
            Create
          </button>
        </div>
      </div>
    </div>
  );
};

export default StaffDashBoardOrderCreateSection;
