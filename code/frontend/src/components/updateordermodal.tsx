"use client";

import { useState } from "react";

interface Props {
    order: any;
    onClose: () => void;
    onUpdated: () => void;
  }

  export default function UpdateOrderModal({ order, onClose, onUpdated }: Props) {
    const [status, setStatus] = useState(order.status);
    const [tracking, setTracking] = useState(order.tracking || "");
    const [loading, setLoading] = useState(false);

    async function handleUpdate() {
        setLoading(true);

        await fetch("http://localhost:3000/api/admin/orders", {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${localStorage.getItem("token")}`,
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
            <div className="fixed inset-0 bg-black/40 flex items-center justify-center">
            <div className="bg-white p-6 rounded w-96"></div>
            <h2 className="text-lg font-bold mb-4">Update Pesanan</h2>

            <label>Status</label>
            <select
            className="border w-full mb-3 p-2"
            value={status}
            onChange={(e) => setStatus(e.target.value)}
            >
                <option value="MENUNGGU">MENUNGGU</option>
                <option value="DIPROSES">DIPROSES</option>
                <option value="DIKIRIM">DIKIRIM</option>
                <option value="SELESAI">SELESAI</option>
            </select>

            <label>Tracking</label>
            <input
                className="border w-full mb-4 p-2"
                value={tracking}
                onChange={(e) => setTracking(e.target.value)}
            />

            <div className="flex justify-end gap-2">
            <button onClick={onClose} className="px-3 py-1 border">Batal</button>
                onClick={handleUpdate}
                className="px-3 py-1 bg-blue-600 text-white"