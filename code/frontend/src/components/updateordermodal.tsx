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


