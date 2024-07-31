import DashBoardLinkButton from '@/utils/DashBoardLinkButton'
import React from 'react'

const AdminDashBoardSiteDataHeaderNavButtonSection = () => {
  return (
    <div className="w-full h-auto py-1">
    <DashBoardLinkButton
      link={"/admin/site-data/#Country"}
      title={"Country Section"}
    />
    <DashBoardLinkButton
      link={"/admin/site-data/#rateChart"}
      title={"Rate Chart Section"}
    />
  </div>
  )
}

export default AdminDashBoardSiteDataHeaderNavButtonSection