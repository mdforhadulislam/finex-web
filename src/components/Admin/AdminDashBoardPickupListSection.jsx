import { AuthContext } from "@/context/AuthContext";
import { LoadingContext } from "@/context/LoadingContext";
import { ModalContext } from "@/context/ModalContext";
import {
  deleteRequestSend,
  getRequestSend,
  PICKUP_API,
  PICKUP_CONFIRM_API,
  putRequestSend,
  SINGLE_PICKUP_API,
} from "@/data/ApiMethod";
import { useRouter } from "next/router";
import { useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import AdminDashBoardPickupListBox from "./AdminDashBoardPickupListBox";
import AdminDashBoardPickupListViewPopup from "./AdminDashBoardPickupListViewPopup";

const AdminDashBoardPickupListSection = () => {
  const loading = useContext(LoadingContext);
  const modal = useContext(ModalContext);
  const auth = useContext(AuthContext);

  const router = useRouter();

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
    <div className="w-full h-auto py-2" id="pickup">
      <div className=" w-full h-auto p-2 shadow-3xl rounded-md pb-5">
        <div className="w-full h-auto py-2 pb-4">
          <h1 className="text-center text-lg font-semibold">PickUp List</h1>
        </div>

        <div className="w-full flex gap-3 flex-col sm:flex-row">
          

        <button
            className="w-auto px-4 py-2 bg-defult-button text-white rounded-md"
            onClick={() => {
              getRequestSend(PICKUP_API).then((res) => {
                if (res.status == 200) {
                  setAllPickup(res.data);
                }
              });
            }}
          >
            All Pickup
          </button>
          
          <button
            className="w-auto px-4 py-2 bg-green-600 text-white rounded-md"
            onClick={() => {
              getRequestSend(PICKUP_API).then((res) => {
                if (res.status == 200) {
                  setAllPickup([
                    ...res.data.filter(
                      (item) => item?.isConfirm?.confirm == true
                    ),
                  ]);
                }
              });
            }}
          >
            Accept
          </button>
          <button
            className="w-auto px-4 py-2 bg-defult-button text-white rounded-md"
            onClick={() => {
              getRequestSend(PICKUP_API).then((res) => {
                if (res.status == 200) {
                  setAllPickup([
                    ...res.data.filter(
                      (item) => item?.isConfirm?.confirm != true
                    ),
                  ]);
                }
              });
            }}
          >
            Pending
          </button>
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
                router.push(`/admin/pickup/${pickupData._id}`);
              }}
              deleteAction={() => {
                loading.loadingStart();
                deleteRequestSend(SINGLE_PICKUP_API(pickupData._id)).then(
                  (res) => {
                    loading.loadingEnd();
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
                loading.loadingStart();
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
                  loading.loadingEnd();
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
