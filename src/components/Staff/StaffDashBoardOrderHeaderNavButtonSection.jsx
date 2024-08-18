import DashBoardLinkButton from '@/utils/DashBoardLinkButton'
import React from 'react'

const StaffDashBoardOrderHeaderNavButtonSection = () => {
  return (
    <div className="w-full h-auto py-1">
    <DashBoardLinkButton
      link={"/staff/order/#allOrder"}
      title={"All Order"}
    />
    <DashBoardLinkButton
      link={"/staff/order/#createOrder"}
      title={"Create Order"}
    />
  </div>
  )
}

export default StaffDashBoardOrderHeaderNavButtonSection