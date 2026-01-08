import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function POST(req: Request) {
  const user = JSON.parse(req.headers.get("user")!);
  const { title, description, userId } = await req.json();

  const order = await prisma.order.create({
    data: {
      title,
      description,
      status: "PENDING",
      userId: user.id,
    },
  });

  return NextResponse.json({
    message: "Pesanan berhasil dibuat",
    order,
  });
}

export async function GET() {
  const orders = await prisma.order.findMany();
  return NextResponse.json(orders);
}

export async function PUT(req: Request) {
  try {
    
    });

    