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
  