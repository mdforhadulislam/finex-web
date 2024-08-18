'use client'
import UserIcon from "@/public/profile.svg";
import Image from "next/image";
import { IoEyeOutline } from "react-icons/io5";
import { LiaHandPointRight } from "react-icons/lia";

const StaffDashBoardPickupListBox = ({ pData, viewAction, acceptAction }) => {
  return (
    <div className="w-full h-auto p-2 shadow-3xl border rounded-md">
      <div className="w-full h-auto flex gap-1 flex-col sm:flex-row items-center align-middle justify-between">
        <div className="w-[40px] h-[40px] flex justify-center align-middle items-center rounded-full shadow-4xl border-gray-500 ">
          <Image
            width={40}
            height={40}
            src={UserIcon.src}
            className="  rounded-full"
            alt="User name"
          />
        </div>
        <table  className="w-full ">
         <tbody  className="w-full flex gap-2 align-middle sm:items-center justify-center sm:justify-around flex-col sm:flex-row ">
         <tr className="w-auto flex gap-2">
            <td className="block md:hidden">Name :</td>
            <td>{pData?.name}</td>
          </tr>
          <tr className="w-auto flex gap-2">
            <td className="block md:hidden">Phone :</td>
            <td>{pData?.phone}</td>
          </tr>
          <tr className="w-auto flex gap-2">
            <td className="block md:hidden">Date :</td>
            <td>
              {new Date(pData?.dateTime).toLocaleDateString()}-
              {new Date(pData?.dateTime).toLocaleTimeString()}
            </td>
          </tr>
          <tr className="w-auto flex gap-2">
            <td className="block md:hidden">Weight :</td>
            <td>{pData?.weight}</td>
          </tr>
         </tbody>
        </table>
        <div className="flex gap-2">
          <IoEyeOutline
            onClick={viewAction}
            className="w-8 h-8 p-[6px] text-green-600 hover:bg-gray-100 rounded-md"
          />

          {!pData?.isConfirm?.confirm && (
            <LiaHandPointRight
              onClick={acceptAction}
              className="w-8 h-8 p-[6px] text-green-600 hover:bg-gray-100 rounded-md"
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default StaffDashBoardPickupListBox;
