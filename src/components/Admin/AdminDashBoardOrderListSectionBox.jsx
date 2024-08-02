import React from 'react'
import { FaArrowAltCircleDown } from 'react-icons/fa'

const AdminDashBoardOrderListSectionBox = ({orderData}) => {
  return (
    <div className='w-full h-auto shadow-3xl rounded-md p-2'>

      <div className="w-full h-auto grid grid-cols-1 grid-rows-3 sm:grid-cols-2 sm:grid-rows-2 md:grid-cols-3 md:grid-rows-1 relative">
      <div className="w-full h-auto flex flex-col gap-1 text-sm">
          <div className="text-lg font-semibold flex justify-start items-center align-middle gap-3">Sender <FaArrowAltCircleDown className='w-5 h-5'/></div>
          <div>Name : {orderData?.parcel?.sender?.name}</div>
                  <div>Phone : {orderData?.parcel?.sender?.phone}</div>
                  <div>Email : {orderData?.parcel?.sender?.email}</div>
                  <div>From : {orderData?.parcel?.sender?.address}</div>
                  <div>weight: {orderData?.parcel?.weight}</div>
        </div>
        <div className="w-full h-auto flex flex-col gap-1  text-sm">
          <div className="text-lg font-semibold  flex justify-start items-center align-middle gap-3">Reciver <FaArrowAltCircleDown className='w-5 h-5'/></div>
          <div>Name : {orderData?.parcel?.reciver?.name}</div>
                  <div>Phone : {orderData?.parcel?.reciver?.phone}</div>
                  <div>Email : {orderData?.parcel?.reciver?.email}</div>
                  <div>From : {orderData?.parcel?.reciver?.address?.address}</div>
                  <div>weight: {orderData?.parcel?.weight}</div>
        </div>


        <div className="w-full h-auto flex flex-col gap-1  text-sm">
          <div className="text-lg font-semibold  flex justify-start items-center align-middle gap-3">Details <FaArrowAltCircleDown className='w-5 h-5'/></div>


          <div>Order ID: {orderData?._id}</div>
          <div>Tracking ID: {orderData?.trackingId}</div>
          <div>Date: {new Date(orderData?.orderDate).toLocaleDateString()}</div>
          <div>weight: {orderData?.parcel?.weight}</div>
          <div>Payment Type: {orderData?.payment?.pType}</div>
          <div>Total Payment Recived: {Number(orderData?.payment?.pRecived)}</div>

        </div>


      </div>
      



    </div>
  )
}

export default AdminDashBoardOrderListSectionBox