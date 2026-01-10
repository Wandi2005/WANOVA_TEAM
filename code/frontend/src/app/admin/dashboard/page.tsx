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