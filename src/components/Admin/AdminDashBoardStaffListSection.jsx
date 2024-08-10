"use client"

import { getRequestSend, USER_ACCOUNT_API } from "@/data/ApiMethod";
import React, { useEffect, useState } from "react";

const AdminDashBoardStaffListSection = () => {
  const [allStaff, setAllStaff] = useState([]);

  useEffect(() => {
    getRequestSend(USER_ACCOUNT_API).then((res) => {
      if (res.status == 200) {
        setAllStaff(res.data.filter((user) => user.role == "staff"));
      }
    });
  }, []);
  return <div className="w-full h-auto p-2">

    {
        allStaff.map(sUser=> <div key={sUser._id}> hello </div>)
    }



  </div>;
};

export default AdminDashBoardStaffListSection;
