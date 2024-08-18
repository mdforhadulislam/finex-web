"use client";

import AdminDashBoardSiteDataCountry from "@/components/Admin/AdminDashBoardSiteDataCountry";
import AdminDashBoardSiteDataHeaderNavButtonSection from "@/components/Admin/AdminDashBoardSiteDataHeaderNavButtonSection";
import AdminDashBoardSiteDataRateChart from "@/components/Admin/AdminDashBoardSiteDataRateChart";
import Head from "next/head";

const SiteData = () => {
  return (
    <>
    <Head><title>Admin Site-Data</title></Head>
      <AdminDashBoardSiteDataHeaderNavButtonSection />
      <AdminDashBoardSiteDataCountry />
      <AdminDashBoardSiteDataRateChart />
    </>
  );
};

export default SiteData;
