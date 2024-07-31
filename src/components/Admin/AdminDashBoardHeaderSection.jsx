import DashBoardHeaderButtonBox from '@/utils/DashBoardHeaderButtonBox'
import React from 'react'

const AdminDashBoardHeaderSection = () => {
  return (
    <div className='w-full h-auto grid sm:grid-cols-2 md:grid-cols-3 grid-cols-1 grid-rows-2 sm:grid-rows-1 gap-4 py-1'>
        
<DashBoardHeaderButtonBox title={"Today Total Pickup"} value={"40"} link={"/admin/pickup"} />
<DashBoardHeaderButtonBox title={"Total Pickup"} value={"40"} link={"/admin/pickup"} />
<DashBoardHeaderButtonBox title={"Today Total Order"} value={"40"} link={"/admin/order"} />

    </div>
  )
}

export default AdminDashBoardHeaderSection