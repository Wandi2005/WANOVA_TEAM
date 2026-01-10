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