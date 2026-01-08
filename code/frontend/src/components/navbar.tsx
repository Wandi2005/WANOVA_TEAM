"use client";

import { logout } from "@/lib/auth";
export default function Navbar({ role }: { role: "ADMIN" | "USER" }) {
    return (
        <div className="bg-blue-600 text-white p-4 flex justify-between">
          <span className="font-bold">
            Sistem Arsip Digital
          </span> 

          <div className="flex gap-4">
            {role === "ADMIN" && (
             <a href="/admin/dashboard">Dashboard Admin</a>
            )}
            {role === "USER" && (
            <a href="/user/dashboard">Dashboard User</a>
             )}