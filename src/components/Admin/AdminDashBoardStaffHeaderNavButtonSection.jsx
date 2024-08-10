import DashBoardLinkButton from '@/utils/DashBoardLinkButton'
import React from 'react'

const AdminDashBoardStaffHeaderNavButtonSection = () => {
  return (
    <div className="w-full h-auto py-1">
    <DashBoardLinkButton
      link={"/admin/staff/create"}
      title={"Add New Staff"}
    />
  </div>
  )
}

export default AdminDashBoardStaffHeaderNavButtonSection