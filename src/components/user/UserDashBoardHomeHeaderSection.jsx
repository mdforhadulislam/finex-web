import { AuthContext } from "@/context/AuthContext";
import { getRequestSend, ORDER_API, PICKUP_API } from "@/data/ApiMethod";
import DashBoardHeaderButtonBox from "@/utils/DashBoardHeaderButtonBox";
import React, { useContext, useEffect, useState } from "react";

const UserDashBoardHomeHeaderSection = () => {
  const [allPickup, setAllPickup] = useState([]);
  const [allOrder, setAllOrder] = useState([]);
  const auth = useContext(AuthContext);

  useEffect(() => {
    getRequestSend(PICKUP_API).then((res) => {
      if (res.status == 200) {
        setAllPickup(res.data);
      }
    });
    getRequestSend(ORDER_API).then((res) => {
      if (res.status == 200) {
        setAllOrder(res.data);
      }
    });
  }, []);

  return (
    <div className="w-full h-auto grid sm:grid-cols-2 md:grid-cols-3 grid-cols-1 grid-rows-2 sm:grid-rows-1 gap-4 py-1">
      <DashBoardHeaderButtonBox
        title={"Total Pickup Pending"}
        value={
          allPickup.filter(
            (sPickup) =>
              sPickup?.phone == auth?.user?.phone &&
              sPickup?.isConfirm?.confirm == false
          ).length
        }
        link={"/user/pickup"}
      />

      <DashBoardHeaderButtonBox
        title={"Total Order"}
        value={
          allOrder.filter((sOrder) => sOrder.customarPhone == auth?.user?.phone)
            .length
        }
        link={"/user/order"}
      />
    </div>
  );
};

export default UserDashBoardHomeHeaderSection;
