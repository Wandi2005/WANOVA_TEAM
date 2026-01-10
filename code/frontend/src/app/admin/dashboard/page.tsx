"use client";
import { useState } from "react";

interface Order {
  id: number;
  status: string;
  tracking?: string;
}
onClose: () => void;{
  onUpdated: () => void;
}

export default function UpdateOrderModal({
  order,
  onClose,
  onUpdated,
}: Props) {
  const [status, setStatus] = useState<string>(order.status);
  const [tracking, setTracking] = useState<string>(order.tracking || "");
  const [loading, setLoading] = useState<boolean>(false);


  async function handleUpdate() {
    setLoading(true);
    await fetch("http://localhost:3000/api/admin/orders", {
      method: "PUT",
        headers: {
        "Content-Type": "application/json",
        Authorization: Bearer ${localStorage.getItem("token")},
          },
      body: JSON.stringify({
        id: order.id,
        status,
        tracking,
      }),
    });

     setLoading(false);
    onUpdated();
    onClose();
  }
    return (
      <div className="fixed inset-0 bg-black/40 flex items-center justify-center"></div>
       <div className="bg-white p-6 rounded w-96">
        <h2 className="text-lg font-bold mb-4">Update Pesanan</h2>
<label>Status</label>
        <select
          className="border w-full mb-3 p-2"
          value={status}