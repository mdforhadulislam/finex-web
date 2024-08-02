"use client"
import AdminDashBoardOrderCreateSection from '@/components/Admin/AdminDashBoardOrderCreateSection'
import AdminDashBoardOrderHeaderNavButtonSection from '@/components/Admin/AdminDashBoardOrderHeaderNavButtonSection'
import AdminDashBoardOrderListSection from '@/components/Admin/AdminDashBoardOrderListSection'
import React from 'react'

const Order = () => {
  return (
    <>
        <AdminDashBoardOrderHeaderNavButtonSection />
        <AdminDashBoardOrderListSection />
        <AdminDashBoardOrderCreateSection />
    </>
  )
}

export default Order