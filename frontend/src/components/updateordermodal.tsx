"use client";

import { useState } from "react";

interface Order {
  id: number;
  judul: string;
  status: string;
  tracking: string | null;
}

interface Props {
  order: Order | null;
  onClose: () => void;
  onSave: (order: Order) => void;
}

export default function UpdateOrderModal({ order, onClose, onSave }: Props) {
  const [status, setStatus] = useState(order?.status ?? "");
  const [tracking, setTracking] = useState(order?.tracking ?? "");

  if (!order) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50">
      <div className="bg-white text-black p-6 rounded w-96">
        <h2 className="text-xl font-bold mb-4">Update Pesanan</h2>

        <div className="mb-3">
          <label className="block text-sm font-semibold mb-1">Judul</label>
          <input
            value={order.judul}
            disabled
            className="w-full px-2 py-1 border rounded bg-gray-100"
          />
        </div>

        <div className="mb-3">
          <label className="block text-sm font-semibold mb-1">Status</label>
          <select
            value={status}
            onChange={(e) => setStatus(e.target.value)}
            className="w-full px-2 py-1 border rounded"
          >
            <option value="MENUNGGU">MENUNGGU</option>
            <option value="DIPROSES">DIPROSES</option>
            <option value="SELESAI">SELESAI</option>
          </select>
        </div>

        <div className="mb-4">
          <label className="block text-sm font-semibold mb-1">
            Tracking
          </label>
          <input
            value={tracking}
            onChange={(e) => setTracking(e.target.value)}
            className="w-full px-2 py-1 border rounded"
            placeholder="Masukkan tracking"
          />
        </div>

        <div className="flex justify-end space-x-2">
          <button
            onClick={onClose}
            className="px-3 py-1 bg-gray-400 rounded hover:bg-gray-500"
          >
            Batal
          </button>

          <button
            onClick={() =>
              onSave({
                ...order,
                status,
                tracking: tracking || null,
              })
            }
            className="px-3 py-1 bg-blue-600 text-white rounded hover:bg-blue-700"
          >
            Simpan
          </button>
        </div>
      </div>
    </div>
  );
}