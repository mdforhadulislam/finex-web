 "use client"
import { AuthContext } from '@/context/AuthContext';
import { LoadingContext } from '@/context/LoadingContext';
import { PICKUP_API, postRequestSend } from '@/data/ApiMethod';
import { MainAddress } from '@/utils/Address';
import InputBox from '@/utils/InputBox';
import Head from 'next/head';
import { useRouter } from 'next/router';
import React, { useContext, useState } from 'react'
import { toast } from 'react-toastify';

const UserCreatePickup = () => {
    const authContext = useContext(AuthContext);
    const router = useRouter();
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
      address: "",
      dateTime: "",
    });
  
    return (
      <div className="w-full h-auto py-2" id="createrequest">
        
    <Head><title>User Create Pickup</title></Head>
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
  
            <div className="w-full h-auto flex justify-end items-end">
              <button
                className="bg-defult-button text-base rounded-md text-white py-2 px-12 text-center w-full sm:w-auto"
                onClick={() => {
                  loading.loadingStart();
                  const pickupDatas = {
                    ...pickupData,
                    name: authContext.user.name,
                    phone: authContext.user.phone,
                    address: isAddress,
                  };
  
                  postRequestSend(PICKUP_API, {}, pickupDatas).then((res) => {
                    loading.loadingEnd();
                    if (res.status == 200) {
                      toast.success(res.message);
                      router.push("/user/pickup");
                    } else {
                      toast.error(res.message);
                    }
                  });
                }}
              >
                Create PickUp
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  };


export default UserCreatePickup