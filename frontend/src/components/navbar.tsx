"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Navbar({ role }: { role: "ADMIN" | "USER" }) {
  const router = useRouter();

  const handleLogout = () => {
    localStorage.removeItem("token");
    router.push("/login");
  };

  return (
    <header className="bg-blue-600 text-white p-4 flex justify-between items-center">
      <span className="font-bold">Sistem Arsip Digital</span>

      <nav className="flex gap-4 items-center">
        {role === "ADMIN" && (
          <Link href="/admin/dashboard" className="hover:underline">
            Dashboard Admin
          </Link>
        )}

        {role === "USER" && (
          <Link href="/user/dashboard" className="hover:underline">
            Dashboard User
          </Link>
        )}

          <button
          onClick={handleLogout}
          className="bg-red-500 px-3 py-1 rounded hover:bg-red-600"
        >
          Logout
        </button>
      </nav>
    </header>
  );
}

