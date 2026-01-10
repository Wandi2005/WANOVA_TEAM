"use client";

import Navbar from "@/components/navbar";
import SidebarAdmin from "@/components/sidebaradmin";

export default function AdminDashboard() {
  return (
    <>
      <Navbar role="ADMIN" />
      <div className="flex">
        <SidebarAdmin />
        <div className="p-6">
          <h1 className="text-2xl font-bold">Dashboard Admin</h1>
        </div>
      </div>
    </>
  );
}
