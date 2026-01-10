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

  const [selectedOrder, setSelectedOrder] = useState<Order | null>(null);

 const handleSave = (updatedOrder: Order) => {
 setOrders((prev) =>
  prev.map((o) => (o.id === updatedOrder.id ? updatedOrder : o))
    );
    setSelectedOrder(null);
  };

  return (
    <>
<Navbar role="ADMIN" />
<div className="flex min-h-screen bg-black text-white">
        <SidebarAdmin />

<main className="p-6 w-full">
          <h1 className="text-2xl font-bold mb-6">Dashboard Admin</h1>

<table className="w-full border border-gray-700">
            <thead className="bg-gray-800">
              <tr>
 <th className="p-2 border">ID</th>
                <th className="p-2 border">Judul</th>
                <th className="p-2 border">Status</th>
                <th className="p-2 border">Tracking</th>
                <th className="p-2 border">Aksi</th>
              </tr>
            </thead>

 <tbody>
              {orders.map((order) => (






