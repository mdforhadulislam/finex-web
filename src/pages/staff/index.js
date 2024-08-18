"use client";
import StaffDashBoardHeaderNavSection from "@/components/Staff/StaffDashBoardHeaderNavSection";
import StaffDashBoardHeaderSection from "@/components/Staff/StaffDashBoardHeaderSection";
import StaffDashBoardOrderListSection from "@/components/Staff/StaffDashBoardOrderListSection";
import StaffDashBoardPickupListSection from "@/components/Staff/StaffDashBoardPickupListSection";
import StaffDashBoardTrackListSection from "@/components/Staff/StaffDashBoardTrackListSection";
import Head from "next/head";
import { useState } from "react";

const StaffDashboard = () => {
  const [tab, setTab] = useState({
    pickup: true,
    tracking: false,
    order: false,
  });

  return (
    <>
    <Head><title>Staff Dashboard</title></Head>
      <StaffDashBoardHeaderSection />
      <StaffDashBoardHeaderNavSection tab={tab} setTab={setTab} />
      {tab.pickup && <StaffDashBoardPickupListSection />}
      {tab.order && <StaffDashBoardOrderListSection />}
      {tab.tracking && <StaffDashBoardTrackListSection />}
    </>
  );
};

export default StaffDashboard;
