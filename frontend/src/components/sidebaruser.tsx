"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

export default function SidebarUser() {
  const pathname = usePathname();
  const router = useRouter();

   const handleLogout = () => {
    localStorage.removeItem("token");
    router.push("/login");
  };

  const menuClass = (path: string) =>
    `block px-4 py-2 rounded hover:bg-blue-100 ${
      pathname === path ? "bg-blue-200 font-semibold" : ""
    }`;

    return (
    <aside className="w-64 bg-gray-100 min-h-screen border-r">
      <div className="p-4 border-b">
        <h2 className="text-lg font-bold">User Panel</h2>
      </div>

      <nav className="p-4 space-y-2">
        <Link href="/user/dashboard" className={menuClass("/user/dashboard")}>
          Dashboard
        </Link>

         <Link href="/user/orders" className={menuClass("/user/orders")}>
          Pesanan Saya
        </Link>

        <button
          onClick={handleLogout}
          className="w-full text-left px-4 py-2 rounded hover:bg-red-100 text-red-600"
        >
          Logout
        </button>
      </nav>
    </aside>
  );
}


