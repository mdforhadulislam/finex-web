import { getRequestSend, ORDER_API, PICKUP_API } from '@/data/ApiMethod';
import DashBoardHeaderButtonBox from '@/utils/DashBoardHeaderButtonBox'
import React, { useEffect, useState } from 'react'

const AdminDashBoardHeaderSection  = () => {
  const [allPickup, setAllPickup] = useState([]);
  const [allOrder, setAllOrder] = useState([]);

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
        title={"Today Total Pickup"}
        value={
          allPickup.filter(
            (sPickup) =>
              new Date(sPickup?.dateTime).toLocaleDateString() ==
                new Date().toLocaleDateString() &&
              sPickup?.isConfirm?.confirm == false
          ).length
        }
        link={"/admin/pickup"}
      />
      <DashBoardHeaderButtonBox
        title={"Total Pickup"}
        value={allPickup.length}
        link={"/admin/pickup"}
      />
      <DashBoardHeaderButtonBox
        title={"Today Total Order"}
        value={
          allOrder.filter(
            (sOrder) =>
              new Date(sOrder.orderDate).toLocaleDateString() ==
              new Date().toLocaleDateString()
          ).length
        }
        link={"/admin/order"}
      />
    </div>
  );
};


export default AdminDashBoardHeaderSection