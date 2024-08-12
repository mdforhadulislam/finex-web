"use client";

import { getRequestSend, USER_ACCOUNT_API } from "@/data/ApiMethod";
import React, { useEffect, useState } from "react";
import AdminSashBoardStaffListSectionBox from "./AdminSashBoardStaffListSectionBox";
import { IoEyeOutline } from "react-icons/io5";
import { FiEdit } from "react-icons/fi";
import { MdDeleteOutline } from "react-icons/md";

const AdminDashBoardStaffListSection = () => {
  const [allStaff, setAllStaff] = useState([]);

  useEffect(() => {
    getRequestSend(USER_ACCOUNT_API).then((res) => {
      if (res.status == 200) {
        setAllStaff(res.data.filter((user) => user.role == "staff"));
      }
    });
  }, []);
  return (
    <div className="w-full h-auto p-2">
      <div className="w-full h-auto flex flex-col gap-3">
      {allStaff.map((sUser) => (
        <div key={sUser._id} className="w-full h-auto relative">
          <AdminSashBoardStaffListSectionBox staffData={sUser} />

          <div className="flex gap-2 absolute right-1 z-10 top-[3%] flex-row">
            <IoEyeOutline className="w-8 h-8 p-[6px] text-green-600 hover:bg-gray-100 rounded-md" />
            <FiEdit className="w-8 h-8 p-[6px] text-blue-600 hover:bg-gray-100 rounded-md" />
            <MdDeleteOutline className="w-8 h-8 p-1 text-red-600 hover:bg-gray-100 rounded-md" />
          </div>
        </div>
      ))}
      </div>
    </div>
  );
};

export default AdminDashBoardStaffListSection;
