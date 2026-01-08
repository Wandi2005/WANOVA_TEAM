import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { verifyToken } from "@/lib/auth";

interface JwtPayload {
  id: string;
  role: "ADMIN" | "USER";
  email?: string;
}

function getAdminFromRequest(req: Request): JwtPayload {
  const authHeader = req.headers.get("authorization");
  if (!authHeader) {
    throw new Error("Unauthorized");
  }

  const token = authHeader.split(" ")[1];
  const decoded = verifyToken(token) as unknown as JwtPayload;

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
  } catch (error) {
    const err = error as Error;

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
      where: { id },
      data: {
        status,
        tracking,
      },
    });

    return NextResponse.json({
      message: "Pesanan berhasil diperbarui oleh admin",
      data: updated,
    });
  } catch (error) {
    const err = error as Error;

    return NextResponse.json(
      { message: err.message || "Update gagal" },
      { status: err.message === "Forbidden" ? 403 : 401 }
    );
  }
}
