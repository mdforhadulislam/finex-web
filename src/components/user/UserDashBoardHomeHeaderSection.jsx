import DashBoardHeaderButtonBox from '@/utils/DashBoardHeaderButtonBox'
import React from 'react'

const UserDashBoardHomeHeaderSection = () => {
  return (
    <div className='w-full h-auto grid sm:grid-cols-2 md:grid-cols-3 grid-cols-1 grid-rows-2 sm:grid-rows-1 gap-4 py-1'>
        
<DashBoardHeaderButtonBox title={"Total Order"} value={"40"} link={"/user/order"} />
<DashBoardHeaderButtonBox title={"Total Pickup"} value={"40"} link={"/user/pickup"} />

    </div>
  )
}

export default UserDashBoardHomeHeaderSection