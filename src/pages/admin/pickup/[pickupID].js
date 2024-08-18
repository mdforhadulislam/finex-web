import { AuthContext } from "@/context/AuthContext";
import { LoadingContext } from "@/context/LoadingContext";
import {
  getRequestSend,
  putRequestSend,
  SINGLE_PICKUP_API,
} from "@/data/ApiMethod";
import { MainAddress } from "@/utils/Address";
import InputBox from "@/utils/InputBox";
import Head from "next/head";
import { useRouter } from "next/router";
import { useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";

const UpdatePickup = () => {
  const router = useRouter();
  const { pickupID } = router.query;
  const loading = useContext(LoadingContext);

  const [isAddress, setIsAddress] = useState({
    region: "",
    city: "",
    area: "",
    address: "",
  });

  const [pickupData, setPickupData] = useState({
    name: "",
    phone: "",
    weight: "",
    address: isAddress,
    dateTime: "",
    isConfirm: {
      staffPhone: "",
      cost: "",
      confirm: false,
      dateTime: new Date(),
    },
  });

  useEffect(() => {
    getRequestSend(SINGLE_PICKUP_API(pickupID)).then((res) => {
      if (res.status == 200) {
        setPickupData(res.data);
        setIsAddress(res.data.address);
      }
    });
  }, [pickupID]);

  return (
    <div className="w-full h-auto py-2" id="createrequest">
      
    <Head><title>Update Pickup</title></Head>
      <div className=" w-full h-auto p-2 shadow-3xl rounded-md pb-5">
        <div className="w-full h-auto py-2 pb-4">
          <h1 className="text-center text-lg font-semibold">PickUp Created</h1>
        </div>

        <div className="w-full h-auto flex flex-col gap-3 p-2 shadow-4xl rounded-md">
          <div className="w-full h-auto flex gap-3 flex-col sm:flex-row">
            <InputBox
              title={"Parcel Weight"}
              type={"text"}
              placeholder={"Parcel weight"}
              action={(e) => {
                setPickupData({ ...pickupData, weight: e.target.value });
              }}
              value={pickupData.weight}
            />
            <InputBox
              title={"PickUp Time"}
              type={"datetime-local"}
              placeholder={"Pick Up Time And Date"}
              action={(e) =>
                setPickupData({ ...pickupData, dateTime: e.target.value })
              }
              value={pickupData.dateTime}
            />
          </div>

          <MainAddress isAddress={isAddress} setIsAddress={setIsAddress} />

          <div className="w-full h-auto flex gap-3 flex-col sm:flex-row">
            <InputBox
              title={"Staff Cost"}
              type={"text"}
              placeholder={"Staff Cost"}
              action={(e) => {
                setPickupData({
                  ...pickupData,
                  isConfirm: {
                    ...pickupData.isConfirm,
                    cost: e.target.value,
                  },
                });
              }}
              value={pickupData.isConfirm.cost}
            />
          </div>

          <div className="w-full h-auto flex justify-end items-end">
            <button
              className="bg-defult-button text-base rounded-md text-white py-2 px-12 text-center w-full sm:w-auto"
              onClick={() => {
                const updatedData = {
                  ...pickupData,
                  address: isAddress,
                };
                loading.loadingStart();
                putRequestSend(
                  SINGLE_PICKUP_API(pickupData._id),
                  {},
                  updatedData
                ).then((res) => {
                  loading.loadingEnd();
                  if (res.status == 200) {
                    toast.success(res.message);
                    router.push("/admin/pickup/");
                  } else {
                    toast.error(res.message);
                  }
                });
              }}
            >
              Update PickUp
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdatePickup;
