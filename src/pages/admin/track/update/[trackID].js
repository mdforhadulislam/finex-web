'use client'
import { getRequestSend, putRequestSend, SINGLE_TRACK_PARCEL_API } from "@/data/ApiMethod";
import { TrackDataList } from "@/data/trackUpdateData";
import InputBox from "@/utils/InputBox";
import SelecteSearchBox from "@/utils/SelecteSearchBox";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { MdDeleteOutline } from "react-icons/md";
import { toast } from "react-toastify";

const UpdateParcelTrack = () => {
  const router = useRouter()
  const {trackID} = router.query

  const [trackDataUpdate, setTrackDataUpdate] = useState({
    company: "",
    tracking: "",
    payment: "",
    trackingDetails: [],
  });

  const [newTrackLocationData, setNewTrackLocationData] = useState({
    id: Date.now(),
    date: "",
    level: "",
    description: "",
    location: "",
  });

  useEffect(()=>{
    getRequestSend(SINGLE_TRACK_PARCEL_API(trackID)).then(res=>{
      if(res.status==200){
        setTrackDataUpdate(res.data.handoverBy)
      }
    })
  },[trackID])

  return (
    <div className="w-full h-auto py-2" id="trackingupdate">
      <div className=" w-full h-auto p-3 shadow-3xl rounded-md">
        <div className="w-full h-auto py-1 mb-3">
          <h1 className="font-semibold text-lg justify-center text-center align-middle items-center">
            Shipmant Travel History
          </h1>
        </div>

        <>
          <div className="grid grid-cols-1 grid-rows-3 sm:grid-cols-2 sm:grid-rows-2 md:grid-cols-3 md:grid-rows-1 gap-3 pt-3 pb-3">
            <InputBox
              name={"handoverByCompany"}
              title={"Handover Company"}
              value={trackDataUpdate?.company}
              action={(e) => {
                setTrackDataUpdate({
                  ...trackDataUpdate,
                  company: e.target.value,
                });
              }}
            />
            <InputBox
              name={"handoverByCompanyTracking"}
              title={"Handover Company Tracking"}
              value={trackDataUpdate?.tracking}
              action={(e) => {
                setTrackDataUpdate({
                  ...trackDataUpdate,
                  tracking: e.target.value,
                });
              }}
            />
            <InputBox
              name={"handoverByCompanyPayment"}
              title={"Handover Company Payment"}
              value={trackDataUpdate?.payment}
              action={(e) => {
                setTrackDataUpdate({
                  ...trackDataUpdate,
                  payment: e.target.value,
                });
              }}
            />
          </div>

          <div className="w-full h-auto pb-6">
            <h1 className="w-full h-auto text-base font-medium text-gray-800 pl-2 p-[2px]">
              Shipmant Update
            </h1>

            <div className="w-full h-auto border-[2px] px-2 py-2 rounded-md text-base">
              <SelecteSearchBox
                titleStyle={"text-base font-medium text-gray-800"}
                boxStyle={"px-3 py-[6px] text-sm"}
                title={"Description"}
                datas={TrackDataList}
                setValue={(e) => {
                  setNewTrackLocationData({
                    ...newTrackLocationData,
                    level: e.level,
                    description: e.name,
                  });
                }}
              />

              <div className="grid grid-cols-1 grid-rows-3 sm:grid-cols-2 sm:grid-rows-1 gap-3 pt-3 pb-3">
                <InputBox
                  type={"datetime-local"}
                  title={"Date"}
                  value={newTrackLocationData.date}
                  action={(e) => {
                    setNewTrackLocationData({
                      ...newTrackLocationData,
                      date: e.target.value,
                    });
                  }}
                  name={"Date"}
                />

                <InputBox
                  type={"text"}
                  title={"Location"}
                  value={newTrackLocationData.location}
                  action={(e) => {
                    setNewTrackLocationData({
                      ...newTrackLocationData,
                      location: e.target.value,
                    });
                  }}
                  name={"Location"}
                />
              </div>

              <div className="pb-4 flex justify-end">
                <button
                  onClick={() => {
                    if (
                      newTrackLocationData.date.length > 0 &&
                      newTrackLocationData.description.length > 0 &&
                      newTrackLocationData.location.length > 0
                    ) {
                      setTrackDataUpdate({
                        ...trackDataUpdate,
                        trackingDetails: [
                          newTrackLocationData,
                          ...trackDataUpdate?.trackingDetails,
                        ],
                      });
                      setNewTrackLocationData({
                        id: Date.now(),
                        date: "",
                        level: "",
                        description: "",
                        location: "",
                      });
                    } else {
                      toast.error("Provide Shipment Data");
                    }
                  }}
                  className="bg-defult-button text-base rounded-md text-white py-[6px] px-4 flex items-center align-middle gap-2"
                >
                  Add Shipment Update
                </button>
              </div>

              <div className=" flex flex-col gap-3">
                {trackDataUpdate?.trackingDetails?.map((item) => {
                  return (
                    <h1
                      key={item?.id}
                      className="w-full h-auto px-2 py-1 shadow-3xl rounded-md border relative bg-gray-100 pr-4"
                    >
                      {item?.date} - {item.description} - {item.location} -{" "}
                      {item.level}
                      <div className="flex gap-2 absolute right-0 z-10 top-[3%]">
                        <MdDeleteOutline
                          className={
                            "w-[30px] h-[30px] p-1 text-red-600 hover:bg-white rounded-md"
                          }
                          onClick={() => {
                            setTrackDataUpdate({
                              ...trackDataUpdate,
                              trackingDetails: [
                                ...trackDataUpdate?.trackingDetails?.filter(
                                  (fitem) => fitem.id != item.id
                                ),
                              ],
                            });
                          }}
                        />
                      </div>
                    </h1>
                  );
                })}
              </div>
            </div>
          </div>

          <div className="pb-4 flex justify-end">
            <button
              onClick={() => {
                putRequestSend(
                  SINGLE_TRACK_PARCEL_API(trackID),
                  {},
                  trackDataUpdate
                ).then((res) => {
                  if (res.status == 200) {
                    router.push("/admin/track")
                    toast.success(res.message);
                    setTrackDataUpdate({
                      trackingId: "",
                      company: "",
                      tracking: "",
                      payment: "",
                      trackingDetails: "",
                    });
                  } else {
                    toast.success(res.message);
                  }
                });
              }}
              className="bg-defult-button text-base rounded-md text-white py-[6px] px-4 flex items-center align-middle gap-2"
            >
              Submit Shipment Data
            </button>
          </div>
        </>
      </div>
    </div>
  );
};

export default UpdateParcelTrack;
