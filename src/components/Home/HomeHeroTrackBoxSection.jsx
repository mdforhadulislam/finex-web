import { getRequestSend } from '@/data/ApiMethod';
import IsBangla from '@/utils/IsBangla';
import IsEnglish from '@/utils/IsEnglish';
import { useRouter } from 'next/router';
import React, { useState } from 'react'
import { toast } from 'react-toastify';

const HomeHeroTrackBoxSection = () => {
    const [trackNumber, setTrackNumber] = useState("");
    const router = useRouter();
  
    return (
      <div className="w-full h-full p-4 bg-white rounded-md shadow-md">
        <form className="w-full h-auto flex justify-center items-center flex-col gap-3">
          <IsEnglish>
            <h1 className="text-3xl font-bold text-defult mt-12">
              Track shipment
            </h1>
          </IsEnglish>
          <IsBangla>
            <h1 className="text-4xl font-bold text-defult mt-12 bfont">
              ট্র্যাকিং শিপম্যান্ট
            </h1>
          </IsBangla>
  
          <input
            type="text"
            placeholder="Parcel Tracking Number"
            className="w-full h-auto mt-1 p-2 border border-defult rounded-md outline-none text-lg "
            value={trackNumber}
            onChange={(e) => setTrackNumber(e.target.value)}
          />
  
          <IsEnglish className={"w-full h-auto"}>
            <button
              onClick={(e) => {
                e.preventDefault()
                if (trackNumber) {
                  getRequestSend(`${TRACKING}${trackNumber}`).then((res) => {
                    if (res.status == 200) {
                      toast.success(res.message);
                      router.push(`/track/${trackNumber}`);
                    } else {
                      toast.error(res.message);
                    }
                  });
                } else {
                  toast.error("Enter Shipment Tracking ID");
                }
              }}
              className="block text-center w-full h-auto p-2 text-lg bg-defult-button text-white rounded-md mt-2"
            >
              Track
            </button>
          </IsEnglish>
  
          <IsBangla className={"w-full h-auto"}>
            <button
              onClick={(e) => {
                e.preventDefault()
                if (trackNumber) {
                  getRequestSend(`${TRACKING}${trackNumber}`).then((res) => {
                    if (res.status == 200) {
                      toast.success(res.message);
                      router.push(`/track/${trackNumber}`);
                    } else {
                      toast.error(res.message);
                    }
                  });
                } else {
                  toast.error("Enter Shipment Tracking ID");
                }
              }}
              className="block text-center w-full h-auto p-2 bg-defult-button text-white rounded-md bfont mt-2 text-2xl"
            >
              ট্রাক করুন
            </button>
          </IsBangla>
        </form>
      </div>
)}

export default HomeHeroTrackBoxSection