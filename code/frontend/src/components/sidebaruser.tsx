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

