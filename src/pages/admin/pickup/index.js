"use client";
import AdminDashBoardPickupHeaderNavButtonSection from "@/components/Admin/AdminDashBoardPickupHeaderNavButtonSection";
import AdminDashBoardPickupListSection from "@/components/Admin/AdminDashBoardPickupListSection";
import Head from "next/head";
import React from "react";

const PickUp = () => {
  return (
    <>
    <Head><title>Admin Pickup</title></Head>
      <AdminDashBoardPickupHeaderNavButtonSection />
      <AdminDashBoardPickupListSection />
    </>
  );
};

export default PickUp;
