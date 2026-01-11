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
                 <div className="flex justify-between items-start">
                  <div>
                    <p className="text-sm opacity-90">{stat.title}</p>
                    <h2 className="text-3xl font-bold mt-1">{stat.value}</h2>
                  </div>
                  <span className="text-2xl">{stat.icon}</span>
                </div>
              </div>
            ))}
          </div>

           {/* Informasi Akun — Card Modern */}
          <div className="bg-white p-6 rounded-2xl shadow-md border border-gray-100 mb-10">
            <h3 className="text-xl font-semibold text-gray-800 mb-5 flex items-center gap-2">
              <FiUser className="text-indigo-600" /> Informasi Akun
            </h3>
            <div className="space-y-4">
              {[
                { label: "Nama", value: "User Demo", icon: <FiUser /> },
                { label: "Email", value: "user@email.com", icon: <FiMail /> },
                { label: "Role", value: "USER", icon: <FiShield />, badge: "bg-indigo-100 text-indigo-800" },
                { label: "Status", value: "Aktif", icon: <FiCheckCircle />, badge: "bg-green-100 text-green-800" },
              ].map((item, i) => (
                <div key={i} className="flex items-center justify-between py-2 border-b border-gray-100 last:border-0">
                  <div className="flex items-center gap-3">
                    <span className="text-indigo-600">{item.icon}</span>
                    <span className="font-medium text-gray-700">{item.label}</span>
                  </div>
                  {item.badge ? (
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${item.badge}`}>
                      {item.value}
                    </span>
                  ) : (
                    <span className="text-gray-600">{item.value}</span>
                  )}
                </div>
              ))}
            </div>
          </div>

           {/* Menu Fitur — Card Interaktif */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: "Profil",
                desc: "Kelola data diri, foto profil, dan keamanan akun.",
                color: "indigo",
                hoverBg: "hover:bg-indigo-50",
                icon: "👤",
              },
              {
                title: "Pesanan",
                desc: "Lihat status, detail, dan riwayat pesanan Anda.",
                color: "emerald",
                hoverBg: "hover:bg-emerald-50",
                icon: "📋",
              },
              {
                title: "Pengaturan",
                desc: "Atur preferensi sistem, notifikasi, dan keamanan.",
                color: "purple",
                hoverBg: "hover:bg-purple-50",
                icon: "⚙️",
              },




                


