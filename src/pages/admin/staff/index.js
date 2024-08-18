import AdminDashBoardStaffHeaderNavButtonSection from "@/components/Admin/AdminDashBoardStaffHeaderNavButtonSection";
import AdminDashBoardStaffListSection from "@/components/Admin/AdminDashBoardStaffListSection";
import Head from "next/head";
import React from "react";

const AdminStaff = () => {
  return (
    <>
    <Head><title>Admin Staff</title></Head>
      <AdminDashBoardStaffHeaderNavButtonSection />
      <AdminDashBoardStaffListSection />
    </>
  );
};

export default AdminStaff;
