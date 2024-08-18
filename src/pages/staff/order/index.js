"use client"
import StaffDashBoardOrderCreateSection from '@/components/Staff/StaffDashBoardOrderCreateSection'
import StaffDashBoardOrderHeaderNavButtonSection from '@/components/Staff/StaffDashBoardOrderHeaderNavButtonSection'
import StaffDashBoardOrderListSection from '@/components/Staff/StaffDashBoardOrderListSection'
import Head from 'next/head'
import React from 'react'

const StaffOrder = () => {
  return (
    <>
    <Head><title>Staff Order</title></Head>
        <StaffDashBoardOrderHeaderNavButtonSection />
        <StaffDashBoardOrderListSection />
        <StaffDashBoardOrderCreateSection />
    </>
  )
}

export default StaffOrder