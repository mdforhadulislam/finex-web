import { AuthContext } from "@/context/AuthContext";
import { LoadingContext } from "@/context/LoadingContext";
import { ModalContext } from "@/context/ModalContext";
import { getRequestSend, PICKUP_API } from "@/data/ApiMethod";
import { useContext, useEffect, useState } from "react";
import UserDashBoardPickupListBox from "./UserDashBoardPickupListBox";
import UserDashBoardPickupListViewPopup from "./UserDashBoardPickupListViewPopup";

const UserDashBoardPickupListSection = () => {
  const authcontext = useContext(AuthContext);
  const loading = useContext(LoadingContext)
  const modal = useContext(ModalContext)
  const [userRequestedPickup, setUserRequestedPickup] = useState([]);
  const [pickupData,setPickupData] = useState({})

  useEffect(() => {
    getRequestSend(PICKUP_API).then((res) => {
      if (res.status == 200) {
        setUserRequestedPickup(res.data);
      }
    });
  }, []);
  return (
    <div className="w-full h-auto py-2" id="createrequest">
      <div className=" w-full h-auto p-2 shadow-3xl rounded-md pb-5">
        <div className="w-full h-auto py-2 pb-4">
          <h1 className="text-center text-lg font-semibold">Created PickUp List</h1>
        </div>

        <div className="w-full h-auto py-2 flex flex-col gap-3">
          {userRequestedPickup
            ?.filter((item) => item?.phone == authcontext?.user?.phone)
            ?.map((pData, index) => (
              <UserDashBoardPickupListBox
                key={index}
                pData={pData}
                viewAction={() => {
                    setPickupData(pData)
                    modal.open()
                }}
              />
            ))}
        </div>
      </div>
      <UserDashBoardPickupListViewPopup pickupData={pickupData} />
    </div>
  );
};

export default UserDashBoardPickupListSection;
