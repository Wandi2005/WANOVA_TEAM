"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Navbar({ role }: { role: "ADMIN" | "USER" }) {
  const router = useRouter();

  const handleLogout = () => {
    localStorage.removeItem("token");
    router.push("/login");
  };
