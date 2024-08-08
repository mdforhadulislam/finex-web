import Image from "next/image";
import React from "react";
import { FiEdit } from "react-icons/fi";
import { IoEyeOutline } from "react-icons/io5";
import { MdDeleteOutline } from "react-icons/md";
import UserIcon from "@/public/profile.svg";

const UserDashBoardPickupListBox = ({
  pData,
  viewAction,
}) => {
  return (
    <div className="w-full h-auto p-2 shadow-3xl border rounded-md">
      <div className="w-full h-auto flex gap-1 flex-col sm:flex-row items-center align-middle justify-between">
        <div className="w-[40px] h-[40px] flex justify-center align-middle items-center rounded-full shadow-4xl border-gray-500 ">
          <Image
            width={40}
            height={40}
            src={UserIcon.src}
            className="rounded-full"
            alt="User name"
          />
        </div>
        <table className="w-full flex gap-2 align-middle sm:items-center justify-center sm:justify-around flex-col sm:flex-row ">
          <div className="w-auto flex gap-2">
            <span className="block md:hidden">Name :</span>
            <span>{pData?.name}</span>
          </div>
          <div className="w-auto flex gap-2">
            <span className="block md:hidden">Phone :</span>
            <span>{pData?.phone}</span>
          </div>
          <div className="w-auto flex gap-2">
            <span className="block md:hidden">Date :</span>
            <span>
              {new Date(pData?.dateTime).toLocaleDateString()}-
              {new Date(pData?.dateTime).toLocaleTimeString()}
            </span>
          </div>
          <div className="w-auto flex gap-2">
            <span className="block md:hidden">Weight :</span>
            <span>{pData?.weight}</span>
          </div>
        </table>
        <div className="flex gap-2 items-center">
        {pData.isConfirm.confirm && <span className=" hover:bg-gray-200 p-1 rounded-md px-2">Accepted</span>}

          <IoEyeOutline
            onClick={viewAction}
            className="w-8 h-8 p-[6px] text-green-600 hover:bg-gray-100 rounded-md"
          />
        </div>
      </div>
    </div>
  );
};

export default UserDashBoardPickupListBox;
