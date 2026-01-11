"use client";

import Navbar from "../../../components/navbar";
import SidebarUser from "../../../components/sidebaruser";
import { FiUser, FiMail, FiShield, FiCheckCircle } from "react-icons/fi"; 

export default function UserDashboard() {
  return (
    <>
      <Navbar role="USER" />
      <div className="flex min-h-screen bg-gradient-to-br from-gray-50 to-indigo-50">
        <SidebarUser />

        <main className="flex-1 p-6">
          {/* Header */}
          <div className="mb-10">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900">Dashboard Pengguna</h1>
            <p className="text-gray-600 mt-2 max-w-2xl">
              Selamat datang! Kelola akun dan aktivitas Anda melalui panel ini dengan nyaman.
            </p>
          </div>

           {/* Statistik Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
            {[
              { title: "Total Pesanan", value: "24", color: "from-blue-500 to-indigo-600", icon: "📦" },
              { title: "Pesanan Aktif", value: "5", color: "from-teal-500 to-emerald-600", icon: "🔄" },
              { title: "Riwayat Transaksi", value: "19", color: "from-purple-500 to-fuchsia-600", icon: "💳" },
              { title: "Notifikasi", value: "3", color: "from-amber-500 to-orange-500", icon: "🔔" },
            ].map((stat, idx) => (
              <div
                key={idx}
                className={`bg-gradient-to-r ${stat.color} rounded-2xl shadow-lg p-6 text-white transform transition-all duration-300 hover:scale-[1.03] hover:shadow-xl`}
              >
                


