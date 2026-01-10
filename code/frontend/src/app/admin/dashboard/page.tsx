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