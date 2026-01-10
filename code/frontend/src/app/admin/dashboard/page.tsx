"use client";

import { useEffect, useState } from "react";

type Order = {
  id: number;
  judul: string;
  status: string;
  tracking?: string | null;
};

export default function AdminDashboard() {
  const [orders, setOrders] = useState<Order[]>([]);

  useEffect(() => {
    fetch("http://localhost:3000/api/admin/orders", {
      headers: {
        Authorization: "Bearer TOKEN_ADMIN_KAMU",
      },
    })
      .then((res) => res.json())
      .then((data) => setOrders(data));
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Dashboard Admin</h1>

      <table className="w-full border">
        <thead>
          <tr className="bg-gray-100">
            <th className="border p-2">ID</th>
            <th className="border p-2">Judul</th>
            <th className="border p-2">Status</th>
            <th className="border p-2">Tracking</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((o) => (
            <tr key={o.id}>
              <td className="border p-2">{o.id}</td>
              <td className="border p-2">{o.judul}</td>
              <td className="border p-2">{o.status}</td>
              <td className="border p-2">{o.tracking || "-"}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}