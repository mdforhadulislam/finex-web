import AdminDashBoardHeaderNavButtonSection from "@/components/Admin/AdminDashBoardHeaderNavButtonSection";
import AdminDashBoardHeaderSection from "@/components/Admin/AdminDashBoardHeaderSection";
import AdminDashBoardOrderListSection from "@/components/Admin/AdminDashBoardOrderListSection";
import AdminDashBoardPickupListSection from "@/components/Admin/AdminDashBoardPickupListSection";
import AdminDashBoardTrackParcelListSection from "@/components/Admin/AdminDashBoardTrackParcelListSection";
import Head from "next/head";
import { useState } from "react";
import SiteUser from "./site-user";

export default function AdminPage() {
  const [tab, setTab] = useState({
    pickup: true,
    order: false,
    track: false,
  });

  return (
    <>
    <Head><title>Admin Dasboard</title></Head>
      <AdminDashBoardHeaderSection />
      <AdminDashBoardHeaderNavButtonSection tab={tab} setTab={setTab} />
      {tab.pickup && <AdminDashBoardPickupListSection />}
      {tab.order && <AdminDashBoardOrderListSection />}
      {tab.track && <AdminDashBoardTrackParcelListSection />}
      <SiteUser />
    </>
  );
}
