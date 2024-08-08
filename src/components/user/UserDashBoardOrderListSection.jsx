import { LoadingContext } from '@/context/LoadingContext';
import { ModalContext } from '@/context/ModalContext';
import { getRequestSend, ORDER_API } from '@/data/ApiMethod';
import InputBox from '@/utils/InputBox';
import React, { useContext, useEffect, useState } from 'react'
import UserDashBoardOrderListBox from './UserDashBoardOrderListBox';
import { AuthContext } from '@/context/AuthContext';
import UserDashBoardOrderListPopup from './UserDashBoardOrderListPopup';
import { IoEyeOutline } from 'react-icons/io5';

const UserDashBoardOrderListSection = () => {
    const authContext = useContext(AuthContext)

    const [orderData, setOrderData] = useState([]);
    const [filteringData, setFilteringData] = useState([]);
  
    const [viewOrderData, setViewOrderData] = useState({});
  
    const loading = useContext(LoadingContext);
    const modal = useContext(ModalContext);
  
    const [searchData, setSearchData] = useState({
      trackingId: "",
      phone: "",
      date: "",
    });
  
    useEffect(() => {
      getRequestSend(ORDER_API).then((res) => {
        if (res.status == 200) {
          setOrderData(res.data);
        }
      });
    }, []);
  
    return (
      <div className="w-full h-auto py-2" id="allorderlist">
        <div className=" w-full h-auto pb-8 p-2 shadow-3xl rounded-md">
          <div className="w-full h-auto py-1 mb-3">
            <h1 className="font-semibold text-lg justify-center text-center align-middle items-center">
              Order List
            </h1>
          </div>
  
          <div className="w-full flex gap-3 px-3 flex-col sm:flex-row">
            <InputBox
              type={"text"}
              placeholder={"Tracking ID"}
              value={searchData.trackingId}
              action={(e) => {
                setSearchData({ ...searchData, trackingId: e.target.value });
                getRequestSend(ORDER_API).then((res) => {
                  if (res.status == 200) {
                    setFilteringData([
                      ...res.data.filter((item) => {
                        return item.trackingId
                          .toLowerCase()
                          ?.replace(/\s+/g, "")
                          ?.includes(
                            e.target.value.toLowerCase()?.replace(/\s+/g, "")
                          );
                      }),
                    ]);
                    setOrderData([...filteringData]);
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
                getRequestSend(ORDER_API).then((res) => {
                  if (res.status == 200) {
                    setFilteringData([
                      ...res.data.filter((item) => {
                        return item.parcel.sender.phone
                          .toLowerCase()
                          ?.replace(/\s+/g, "")
                          ?.includes(
                            e.target.value.toLowerCase()?.replace(/\s+/g, "")
                          );
                      }),
                    ]);
                    setOrderData([...filteringData]);
                  }
                });
              }}
            />
          </div>
  
          <div className="w-full flex align-middle items-center flex-col mt-3 p-3 gap-3">
            {orderData?.filter(fItem=>fItem.parcel.sender.phone==authContext.user.phone)?.map((item, index) => (
            <div className="w-full h-auto relative" key={index}>
                <UserDashBoardOrderListBox orderData={item} />
  
                <div className="flex gap-2 absolute right-1 z-10 top-[3%] flex-col">
                <IoEyeOutline
                  className="w-8 h-8 p-[6px] text-green-600 hover:bg-gray-100 rounded-md"
                  onClick={() => {
                    setViewOrderData(item);
                    modal.open();
                  }}
                />
              </div>
            </div>
            ))}
          </div>
        </div>
        <UserDashBoardOrderListPopup orderData={viewOrderData} />
      </div>
    );
  };
  

export default UserDashBoardOrderListSection