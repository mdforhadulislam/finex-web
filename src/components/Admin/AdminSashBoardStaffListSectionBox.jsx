import Image from 'next/image'
import React from 'react'

const AdminSashBoardStaffListSectionBox = ({staffData}) => {
  return (
    <div className='w-full h-auto p-1 shadow-4xl border'>

        <div className=''>
            <Image width={60} height={60} alt={staffData.name} src={staffData.profile} />
        </div>


    </div>
  )
}

export default AdminSashBoardStaffListSectionBox