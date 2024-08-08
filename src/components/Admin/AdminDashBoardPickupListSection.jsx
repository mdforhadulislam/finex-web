
import { LoadingContext } from "@/context/LoadingContext";
import { ModalContext } from "@/context/ModalContext";
import React, { useContext, useEffect, useState } from "react";
import AdminDashBoardPickupListBox from "./AdminDashBoardPickupListBox";
import {
  deleteRequestSend,
  getRequestSend,
  PICKUP_API,
  PICKUP_CONFIRM_API,
  putRequestSend,
  SINGLE_PICKUP_API,
} from "@/data/ApiMethod";
import AdminDashBoardPickupListViewPopup from "./AdminDashBoardPickupListViewPopup";
import AdminDashBoardPickupListUpdatePopup from "./AdminDashBoardPickupListUpdatePopup";
import { LiaHandPointRight } from "react-icons/lia";
import { AuthContext } from "@/context/AuthContext";
import { toast } from "react-toastify";
import { useRouter } from "next/router";

const AdminDashBoardPickupListSection = () => {
  const loading = useContext(LoadingContext);
  const modal = useContext(ModalContext);
  const auth = useContext(AuthContext);

  const router = useRouter()

  const [allPickup, setAllPickup] = useState([]);

  const [selectedPickupData, setSelectedPickupData] = useState({});

  useEffect(() => {
    getRequestSend(PICKUP_API).then((res) => {
      if (res.status == 200) {
        setAllPickup(res.data);
      }
    });
  }, []);

  return (
    <div className="w-full h-auto py-2" id="createrequest">
      <div className=" w-full h-auto p-2 shadow-3xl rounded-md pb-5">
        <div className="w-full h-auto py-2 pb-4">
          <h1 className="text-center text-lg font-semibold">PickUp List</h1>
        </div>

        <div className="w-full h-auto py-2 flex flex-col gap-3">
          {allPickup.map((pickupData, index) => (
            <AdminDashBoardPickupListBox
              key={index}
              pData={pickupData}
              viewAction={() => {
                setSelectedPickupData(pickupData);
                modal.open();
              }}
              editAction={() => {
                router.push(`/admin/pickup/${pickupData._id}`)
              }}
              deleteAction={() => {
                loading.loadingStart()
                deleteRequestSend(SINGLE_PICKUP_API(pickupData._id)).then(
                  (res) => {
                    loading.loadingEnd()
                    if (res.status == 200) {
                      toast.success(res.message);
                      getRequestSend(PICKUP_API).then((res) => {
                        if (res.status == 200) {
                          setAllPickup(res.data);
                        }
                      });
                    } else {
                      toast.error(res.message);
                    }
                  }
                );
              }}
              acceptAction={() => {
                loading.loadingStart()
                putRequestSend(
                  PICKUP_CONFIRM_API(pickupData._id),
                  {},
                  {
                    staffPhone: auth.user.phone,
                    confirm: true,
                    dateTime: new Date(),
                    cost: 1,
                  }
                ).then((res) => {
                  loading.loadingEnd()
                  if (res.status == 200) {
                    toast.success(res.message);
                    getRequestSend(PICKUP_API).then((res) => {
                      console.log(res);
                      if (res.status == 200) {
                        setAllPickup(res.data);
                      }
                    });
                  } else {
                    toast.error(res.message);
                  }
                });
              }}
            />
          ))}
        </div>
     
          <AdminDashBoardPickupListViewPopup pickupData={selectedPickupData} />
   

      
     
      </div>
    </div>
  );
};

export default AdminDashBoardPickupListSection;
