"use client";

import { logout } from "@/lib/auth";

export default function Navbar({ role }: { role: "ADMIN" | "USER" }) {
  return (
    <div className="bg-blue-600 text-white p-4 flex justify-between">
      <span className="font-bold">Sistem Arsip Digital</span>

      <div className="flex gap-4 items-center">
        {role === "ADMIN" && (
          <a href="/admin/dashboard" className="hover:underline">
            Dashboard Admin
          </a>
        )}

        {role === "USER" && (
          <a href="/user/dashboard" className="hover:underline">
            Dashboard User
          </a>
        )}

        <button
          onClick={logout}
          className="bg-red-500 px-3 py-1 rounded"
        >
          Logout
        </button>
      </div>
    </div>
  );
}
