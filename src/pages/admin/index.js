import AdminDashBoardHeaderNavButtonSection from "@/components/Admin/AdminDashBoardHeaderNavButtonSection";
import AdminDashBoardHeaderSection from "@/components/Admin/AdminDashBoardHeaderSection";
import AdminDashBoardOrderListSection from "@/components/Admin/AdminDashBoardOrderListSection";
import AdminDashBoardPickupListSection from "@/components/Admin/AdminDashBoardPickupListSection";
import AdminDashBoardTrackParcelListSection from "@/components/Admin/AdminDashBoardTrackParcelListSection";
import SiteUser from "./site-user";
import { useState } from "react";

export default function AdminPage() {
  const [tab, setTab] = useState({
    pickup: true,
    order: false,
    track: false,
  });

  return (
    <>
      <AdminDashBoardHeaderSection />
      <AdminDashBoardHeaderNavButtonSection tab={tab} setTab={setTab} />
      {tab.pickup && <AdminDashBoardPickupListSection />}
      {tab.order && <AdminDashBoardOrderListSection />}
      {tab.track && <AdminDashBoardTrackParcelListSection />}
      <SiteUser />
    </>
  );
}
