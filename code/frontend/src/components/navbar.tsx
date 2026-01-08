"use client";

import { logout } from "@/lib/auth";
export default function Navbar({ role }: { role: "ADMIN" | "USER" }) {