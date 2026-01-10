"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

export default function SidebarUser() {
  const pathname = usePathname();
  const router = useRouter();
