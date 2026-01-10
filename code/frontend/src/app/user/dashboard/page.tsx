"use client";

import Navbar from "../../../components/navbar";
import SidebarUser from "../../../components/sidebaruser";

export default function UserDashboard() {
  return (
    <>
      <Navbar role="USER" />
      <div className="flex min-h-screen bg-gray-100">
        <SidebarUser />

         <main className="flex-1 p-6">
          {/* Header */}
          <div className="mb-6">
            <h1 className="text-3xl font-bold">Dashboard User</h1>
            <p className="text-gray-600">
              Selamat datang, kelola akun dan aktivitas Anda melalui panel ini.
            </p>
          </div>

