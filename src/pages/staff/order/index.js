"use client"
import StaffDashBoardOrderCreateSection from '@/components/Staff/StaffDashBoardOrderCreateSection'
import StaffDashBoardOrderHeaderNavButtonSection from '@/components/Staff/StaffDashBoardOrderHeaderNavButtonSection'
import StaffDashBoardOrderListSection from '@/components/Staff/StaffDashBoardOrderListSection'
import React from 'react'

const StaffOrder = () => {
  return (
    <>
        <StaffDashBoardOrderHeaderNavButtonSection />
        <StaffDashBoardOrderListSection />
        <StaffDashBoardOrderCreateSection />
    </>
  )
}

export default StaffOrder