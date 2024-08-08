import { ModalContext } from '@/context/ModalContext';
import { getRequestSend, TRACK_PARCEL_API } from '@/data/ApiMethod';
import InputBox from '@/utils/InputBox';
import { useRouter } from 'next/router';
import React, { useContext, useEffect, useState } from 'react'
import UserDashBoardTrackParcelListBox from './UserDashBoardTrackParcelListBox';
import { IoEyeOutline } from 'react-icons/io5';
import { AuthContext } from '@/context/AuthContext';
import UserDashBoardTrackParcelPopup from './UserDashBoardTrackParcelPopup';

const UserDashBoardTrackParcelListSection = () => {
    const authContext = useContext(AuthContext)

    const [trackData, setTrackData] = useState([]);
    const [filteringData, setFilteringData] = useState([]);
    const [viewTrackParcelData, setViewTrackParcelData] = useState({});
    
    const [searchData, setSearchData] = useState({
      trackingId: "",
      phone: "",
    });
  
    const modal = useContext(ModalContext)
    const router = useRouter()
  
    useEffect(() => {
      getRequestSend(TRACK_PARCEL_API).then((res) => {
        if (res.status == 200) {
          setTrackData(res.data.reverse());
        }
      });
    },[]);
  
    return (
      <div>
        <div className="w-full h-auto py-2" id="trackinglist">
          <div className=" w-full h-auto p-2 shadow-3xl rounded-md">
            <div className="w-full h-auto py-1 mb-4">
              <h1 className="font-semibold text-lg justify-center text-center align-middle items-center">
                Shipment List
              </h1>
            </div>
  
            <div className="w-full flex gap-3 px-3 flex-col sm:flex-row">
            <InputBox
              type={"text"}
              placeholder={"Tracking ID"}
              value={searchData.trackingId}
              action={(e) => {
                setSearchData({ ...searchData, trackingId: e.target.value });
                getRequestSend(TRACK_PARCEL_API).then((res) => {
                  if (res.status == 200) { 
                    console.log(filteringData);
                    setFilteringData([
                      ...res.data.filter((item) => {
                        return item?.ourTrackingId?.toLowerCase()
                          ?.replace(/\s+/g, "")
                          ?.includes(
                            e.target.value.toLowerCase()?.replace(/\s+/g, "")
                          );
                      }),
                    ].reverse());
                    setTrackData([...filteringData]);
                  }
                });
              }}
            />
            <InputBox
              type={"text"}
              placeholder={"Phone Number"}
              value={searchData.phone}
              action={(e) => {
                setSearchData({ ...searchData, phone: e.target.value });
                getRequestSend(TRACK_PARCEL_API).then((res) => {
                  console.log(filteringData);
                  if (res.status == 200) {
                    setFilteringData([
                      ...res.data.filter((item) => {
                        return item?.parcel?.sender?.phone?.toLowerCase()
                          ?.replace(/\s+/g, "")
                          ?.includes(
                            e.target.value.toLowerCase()?.replace(/\s+/g, "")
                          );
                      }),
                    ].reverse());
                    
                    setTrackData([...filteringData]);
                  }
                });
              }}
            />
          </div>
  
            <div className="w-full h-auto flex flex-col gap-3 p-2">
              {trackData?.filter(fItem=>fItem.parcel.sender.phone==authContext.user.phone)?.map((item, index) => (
                <div className="w-full h-auto relative" key={index}>
                  <UserDashBoardTrackParcelListBox trackData={item} />
  
                  <div className="flex gap-2 absolute right-1 z-10 top-[3%] flex-col">
                    <IoEyeOutline
                      className="w-8 h-8 p-[6px] text-green-600 hover:bg-gray-100 rounded-md"
                      onClick={() => {
                        setViewTrackParcelData(item);
                        modal.open();
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <UserDashBoardTrackParcelPopup trackData={viewTrackParcelData}  />
      </div>
    );
  };
  

export default UserDashBoardTrackParcelListSection