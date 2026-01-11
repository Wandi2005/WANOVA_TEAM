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

