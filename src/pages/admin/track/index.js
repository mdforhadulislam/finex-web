import AdminDashBoardTrackNavButtonSection from "@/components/Admin/AdminDashBoardTrackNavButtonSection";
import AdminDashBoardTrackParcelListSection from "@/components/Admin/AdminDashBoardTrackParcelListSection";
import Head from "next/head";
import React from "react";

const Track = () => {
  return (
    <>
    <Head><title>Admin Shipmant Track</title></Head>
      <AdminDashBoardTrackNavButtonSection />
      <AdminDashBoardTrackParcelListSection />
    </>
  );
};

export default Track;
