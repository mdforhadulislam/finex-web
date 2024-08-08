import DashBoardLinkButton from '@/utils/DashBoardLinkButton'
import React from 'react'

const AdminDashBoardPickupHeaderNavButtonSection = () => {
  return (
    <div className="w-full h-auto py-1">
    <DashBoardLinkButton
      link={"/admin/pickup/create"}
      title={"Create Pickup"}
    />
    <DashBoardLinkButton
      link={"/admin/site-data/#rateChart"}
      title={"Rate Chart Section"}
    />
  </div>
  )
}

export default AdminDashBoardPickupHeaderNavButtonSection