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

           {/* Statistik */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
            <div className="bg-white p-5 rounded-xl shadow">
              <p className="text-sm text-gray-500">Total Pesanan</p>
              <h2 className="text-2xl font-bold">24</h2>
            </div>
            <div className="bg-white p-5 rounded-xl shadow">
              <p className="text-sm text-gray-500">Pesanan Aktif</p>
              <h2 className="text-2xl font-bold">5</h2>
            </div>
            <div className="bg-white p-5 rounded-xl shadow">
              <p className="text-sm text-gray-500">Riwayat Transaksi</p>
              <h2 className="text-2xl font-bold">19</h2>
            </div>
            <div className="bg-white p-5 rounded-xl shadow">
              <p className="text-sm text-gray-500">Notifikasi</p>
              <h2 className="text-2xl font-bold">3</h2>
            </div>
          </div>


