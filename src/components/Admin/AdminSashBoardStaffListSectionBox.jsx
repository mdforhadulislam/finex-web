import Image from "next/image";
import React from "react";

const AdminSashBoardStaffListSectionBox = ({ staffData }) => {
  return (
    <div className="w-full h-auto p-[6px] rounded-lg shadow-4xl border flex items-center align-middle">
      <div className="w-[50px] h-[45px] flex justify-center items-center align-middle shadow-3xl rounded-full border">
        <Image
          width={40}
          height={40}
          alt={staffData.name}
          src={staffData.profile}
          className="w-full h-auto rounded-full"
        />
      </div>
      <table className="w-full flex gap-2 align-middle sm:items-center justify-center sm:justify-evenly flex-col sm:flex-row pl-4 sm:pl-0 sm:pr-8">
        <div className="w-auto flex gap-2">
          <span className="block sm:hidden">Name :</span>
          <span>{staffData?.name}</span>
        </div>
        <div className="w-auto flex gap-2">
          <span className="block sm:hidden">Phone :</span>
          <span>{staffData?.phone}</span>
        </div>
      </table>
    </div>
  );
};

export default AdminSashBoardStaffListSectionBox;
