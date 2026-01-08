import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { verifyToken } from "@/lib/auth";


export async function POST(req: Request) { try {
  const authHeader = req.headers.get("authorization");
  if (!authHeader) {
    return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
  }}};

  const token = authHeader.split(" ")[1];
  const user: any = verifyToken(token);

  const { judul, deskripsi } = await req.json();
  const order = await prisma.order.create({
    data: {
      judul,
      deskripsi,
      status: "MENUNGGU",
      userId: user.id,
    },
  });

  return NextResponse.json({
    message: "Pesanan berhasil dibuat",
    data: order,
  });
} catch {
  return NextResponse.json(
    { message: "Gagal membuat pesanan" },
    { status: 500 }
  );
}  
}

// GET: User melihat pesanan sendiri
export async function GET(req: Request) {
  const orders = await prisma.order.findMany({
    where: { userId: user.id },
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

// PUT: User update pesanan (hanya jika belum dibayar)
export async function PUT(req: Request) {
  try {
    const authHeader = req.headers.get("authorization");
    if (!authHeader) {
      return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
    }
  } 