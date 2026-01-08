import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import jwt from "jsonwebtoken";
export function middleware(req: NextRequest) {
  const token = req.cookies.get("token")?.value;

  // belum login
  if (!token) {
    return NextResponse.redirect(
      new URL("/login", req.url)
    );
  }
