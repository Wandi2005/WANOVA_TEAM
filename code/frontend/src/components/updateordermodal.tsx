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