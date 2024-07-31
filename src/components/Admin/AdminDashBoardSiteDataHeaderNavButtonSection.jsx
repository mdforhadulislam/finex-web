import DashBoardLinkButton from '@/utils/DashBoardLinkButton'
import React from 'react'

const AdminDashBoardSiteDataHeaderNavButtonSection = () => {
  return (
    <div className="w-full h-auto py-1">
    <DashBoardLinkButton
      link={"/admin/#pickup"}
      title={"All Pickup Request"}
    />
    <DashBoardLinkButton
      link={"/admin/#Alltracking"}
      title={"All Tracking"}
    />
    <DashBoardLinkButton link={"/admin/#AdminOrder"} title={"All Order"} />
    <DashBoardLinkButton link={"/admin/#AllUser"} title={"All User"} />
  </div>
  )
}

export default AdminDashBoardSiteDataHeaderNavButtonSection