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
 return decoded;
}


/* =========================
   GET: Admin lihat semua pesanan
========================= */
export async function GET(req: Request) {
  try {
    getAdminFromRequest(req);
    const orders = await prisma.order.findMany({
       include: { user: true },
      orderBy: { createdAt: "desc" },
    });
    return NextResponse.json(orders);
  } catch (err: any) {
     return NextResponse.json(
      { message: err.message },
        { status: err.message === "Forbidden" ? 403 : 401 }
    );
  }
}

/* =========================
   PUT: Admin update status & tracking
========================= */
export async function PUT(req: Request) {
  try {
        getAdminFromRequest(req);
        const { id, status, tracking } = await req.json();
        const updated = await prisma.order.update({
