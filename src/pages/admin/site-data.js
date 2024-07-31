"use client"
import AdminDashBoardSiteDataCountry from '@/components/Admin/AdminDashBoardSiteDataCountry'
import AdminDashBoardSiteDataHeaderNavButtonSection from '@/components/Admin/AdminDashBoardSiteDataHeaderNavButtonSection'
import AdminDashBoardSiteDataRateChart from '@/components/Admin/AdminDashBoardSiteDataRateChart'

const SiteData = () => {
  return (
    <>
        <AdminDashBoardSiteDataHeaderNavButtonSection />

        <AdminDashBoardSiteDataCountry />

        <AdminDashBoardSiteDataRateChart />


    </>
  )
}

export default SiteData