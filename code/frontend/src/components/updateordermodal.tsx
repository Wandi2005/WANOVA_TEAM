"use client";
import { useEffect, useState } from "react";

type Order = {
  id: number;
  status: string;
  tracking?: string | null;
};

type Props = {
  order: Order | null;
  onClose: () => void;
  onSave: (status: string, tracking: string) => void;
};

export default function UpdateOrderModal({ order, onClose, onSave }: Props) {
  const [status, setStatus] = useState("");
  const [tracking, setTracking] = useState("");

  useEffect(() => {
    if (!order) return;
    setStatus(order.status);
    setTracking(order.tracking ?? "");
  }, [order?.status, order?.tracking]);

  if (!order) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center">
      <div className="bg-white p-6 rounded w-96">
        <h2 className="text-lg font-bold mb-4">Update Pesanan</h2>

        <select
          className="border p-2 w-full mb-2"
          value={status}
          onChange={(e) => setStatus(e.target.value)}
        >
          <option value="MENUNGGU">MENUNGGU</option>
          <option value="DIPROSES">DIPROSES</option>
          <option value="SELESAI">SELESAI</option>
        </select>

        <input
          type="text"
          className="border p-2 w-full mb-4"
          placeholder="No Resi"
          value={tracking}
          onChange={(e) => setTracking(e.target.value)}
        />

        <div className="flex justify-end gap-2">
          <button onClick={onClose} className="px-4 py-2 bg-gray-300 rounded">
            Batal
          </button>
          <button
            onClick={() => onSave(status, tracking)}
            className="px-4 py-2 bg-blue-600 text-white rounded"
          >
            Simpan
          </button>
        </div>
      </div>
    </div>
  );
}
