"use client";

import Navbar from "@/components/navbar";
import SidebarUser from "@/components/sidebaruser";

export default function UserDashboard() {
  return (
    <>
      <Navbar role="USER" />
      <div className="flex">
        <SidebarUser />
        <div className="p-6">
          <h1 className="text-2xl font-bold">
            Dashboard User
          </h1>
        </div>
      </div>
    </>
  );
}