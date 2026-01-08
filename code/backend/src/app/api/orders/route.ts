import { NextResponse } from "next/server";
import { prisma } from "../../../lib/prisma";
import { verifyToken } from "../../../lib/auth";

/* =========================
   POST: User membuat pesanan
========================= */
export async function POST(req: Request) {
  try {
    const authHeader = req.headers.get("authorization");
    if (!authHeader) {
      return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
    }

    const token = authHeader.split(" ")[1]!;
    const user = verifyToken(token) as { id: number | string };

    const { judul, deskripsi } = await req.json();

    const order = await prisma.order.create({
      data: {
        judul,
        deskripsi,
        status: "MENUNGGU",
        userId: Number(user.id), // ✅ FIX
      },
    });

    return NextResponse.json({
      message: "Pesanan berhasil dibuat",
      data: order,
    });
  } catch (err) {
    return NextResponse.json(
      { message: "Gagal membuat pesanan" },
      { status: 500 }
    );
  }
}

/* =========================
   GET: User melihat pesanan sendiri
========================= */
export async function GET(req: Request) {
  try {
    const authHeader = req.headers.get("authorization");
    if (!authHeader) {
      return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
    }

    const token = authHeader.split(" ")[1]!;
    const user = verifyToken(token) as { id: number | string };

    const orders = await prisma.order.findMany({
      where: { userId: Number(user.id) }, // ✅ FIX
      orderBy: { createdAt: "desc" },
    });

    return NextResponse.json({
      message: "Data pesanan berhasil diambil",
      data: orders,
    });
  } catch {
    return NextResponse.json(
      { message: "Gagal mengambil data pesanan" },
      { status: 500 }
    );
  }
}

/* =========================
   PUT: User update pesanan
========================= */
export async function PUT(req: Request) {
  try {
    const authHeader = req.headers.get("authorization");
    if (!authHeader) {
      return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
    }

    const token = authHeader.split(" ")[1]!;
    const user = verifyToken(token) as { id: number | string };

    const { id, judul, deskripsi } = await req.json();

    const orderId = Number(id); // ✅ FIX

    const order = await prisma.order.findUnique({
      where: { id: orderId },
    });

    if (!order) {
      return NextResponse.json(
        { message: "Pesanan tidak ditemukan" },
        { status: 404 }
      );
    }

    if (order.userId !== Number(user.id)) {
      return NextResponse.json(
        { message: "Akses ditolak" },
        { status: 403 }
      );
    }

    if (order.isPaid) {
      return NextResponse.json(
        { message: "Pesanan tidak dapat diubah setelah pembayaran" },
        { status: 403 }
      );
    }

    const updated = await prisma.order.update({
      where: { id: orderId },
      data: { judul, deskripsi },
    });

    return NextResponse.json({
      message: "Pesanan berhasil diperbarui",
      data: updated,
    });
  } catch {
    return NextResponse.json(
      { message: "Gagal memperbarui pesanan" },
      { status: 500 }
    );
  }
}
