import Image from 'next/image'
import React from 'react'
import BoxIcon from "../../public/BOX.png";

const StaffDashBoardTrackListBox  = ({trackData}) => {
    return (
      <div className="w-full h-auto shadow-3xl rounded-md p-2">
      <div className="w-full h-auto grid grid-cols-1 grid-rows-3 sm:grid-cols-2 sm:grid-rows-2 md:grid-cols-3 md:grid-rows-1 gap-2 relative">
        <div className="sm:col-span-2 sm:row-span-2 md:col-span-1 md:row-span-1">
          <div className="text-lg font-semibold">Trak Id: {trackData?.ourTrackingId}</div>
          <div className="w-full h-auto py-3">
            <Image
              className="w-[100px] h-[100px]"
              weight={100}height={100}
              src={BoxIcon}
              alt="Box Icon"
            />
          </div>
        </div>
        <div className="w-full h-auto flex flex-col gap-1 text-sm">
        <div className="text-lg font-semibold">Sender</div>
                  <div>Name : {trackData?.parcel?.sender?.name}</div>
                  <div>Phone : {trackData?.parcel?.sender?.phone}</div>
                  <div>Email : {trackData?.parcel?.sender?.email}</div>
                  <div>From : {trackData?.parcel?.sender?.address}</div>
                  <div>weight: {trackData?.parcel?.weight}</div>
        </div>
        <div className="w-full h-auto flex flex-col gap-1  text-sm">
          <div className="text-lg font-semibold">Reciver</div>
          <div>Name : {trackData?.parcel?.reciver?.name}</div>
                  <div>Phone : {trackData?.parcel?.reciver?.phone}</div>
                  <div>Email : {trackData?.parcel?.reciver?.email}</div>
                  <div>From : {trackData?.parcel?.reciver?.address?.address}</div>
                  <div>weight: {trackData?.parcel?.weight}</div>
        </div>
  
     
      </div>
    </div>
    )
  }

export default StaffDashBoardTrackListBox