"use client";

import Navbar from "../../../components/navbar";
import SidebarUser from "../../../components/sidebaruser";

export default function UserDashboard() {
  return (
    <>
      <Navbar role="USER" />
      <div className="flex min-h-screen bg-gray-100">
        <SidebarUser />
