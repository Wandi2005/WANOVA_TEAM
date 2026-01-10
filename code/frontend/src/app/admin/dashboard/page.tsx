"use client";
import { useState } from "react";
import Navbar from "../../../components/navbar";
import SidebarAdmin from "../../../components/sidebaradmin";
import UpdateOrderModal from "../../../components/updateordermodal";

interface Order {
id: number;
  judul: string;
 status: string;
  tracking: string | null;
}

export default function AdminDashboard() {
  const [orders, setOrders] = useState<Order[]>([
    { id: 1, judul: "Pesanan 1", status: "MENUNGGU", tracking: null },
    { id: 2, judul: "Pesanan 2", status: "DIPROSES", tracking: "TR1234" },
  ]);


