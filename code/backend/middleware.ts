import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { verifyToken } from "@/lib/jwt";

export function middleware(req: NextRequest) {
  const authHeader = req.headers.get("authorization");
    if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return NextResponse.json(
         { message: "Token tidak tersedia" },
      { status: 401 }
    );
  }
  const token = authHeader.split(" ")[1];

  try {
    const decoded = verifyToken(token);