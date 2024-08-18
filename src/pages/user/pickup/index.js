 "use client"
 import UserDashBoardPickupHeaderNavButtonSection from "@/components/user/UserDashBoardPickupHeaderNavButtonSection";
import UserDashBoardPickupListSection from "@/components/user/UserDashBoardPickupListSection";
import Head from "next/head";

const UserPickup = () => {
  return (
    <>
    <Head><title>User Pickup</title></Head>
      <UserDashBoardPickupHeaderNavButtonSection />
      <UserDashBoardPickupListSection />
    </>
  );
};

export default UserPickup;
