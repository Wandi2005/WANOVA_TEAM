"use client";

import { useEffect, useState } from "react";

type Order = {
  id: number;
  judul: string;
  status: string;
  tracking?: string | null;
};
