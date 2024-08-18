"use client"
import AdminDashBoardOrderCreateSection from '@/components/Admin/AdminDashBoardOrderCreateSection'
import AdminDashBoardOrderHeaderNavButtonSection from '@/components/Admin/AdminDashBoardOrderHeaderNavButtonSection'
import AdminDashBoardOrderListSection from '@/components/Admin/AdminDashBoardOrderListSection'
import Head from 'next/head'
import React from 'react'

const Order = () => {
  return (
    <>
    <Head><title>Admin Order</title></Head>
        <AdminDashBoardOrderHeaderNavButtonSection />
        <AdminDashBoardOrderListSection />
        <AdminDashBoardOrderCreateSection />
    </>
  )
}

export default Order