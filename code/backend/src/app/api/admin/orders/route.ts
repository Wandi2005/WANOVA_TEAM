import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { verifyToken } from "@/lib/auth";
function getAdminFromRequest(req: Request) {
  const authHeader = req.headers.get("authorization");
  if (!authHeader) throw new Error("Unauthorized");
   const token = authHeader.split(" ")[1];
  const decoded: any = verifyToken(token);
    if (decoded.role !== "ADMIN") {
    throw new Error("Forbidden");
  }
