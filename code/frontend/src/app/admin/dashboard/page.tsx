"use client";
import { useState } from "react";

interface Order {
  id: number;
  status: string;
  tracking?: string;
}