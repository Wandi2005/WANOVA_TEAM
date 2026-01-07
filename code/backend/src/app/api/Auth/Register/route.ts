import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { hashPassword } from "@/lib/hash";

export async function POST(req: Request) {
  try {
    const body = await req.json() as {
      nama: string;
      email: string;
      password: string;
    };

    const { nama, email, password } = body;

  if (!nama || !email || !password) {
    return NextResponse.json(
      { message: "Data tidak lengkap" },
      { status: 400 }
    );
  }

  const existing = await prisma.user.findUnique({
    where: { email },
  });

  if (existing) {
    return NextResponse.json(
      { message: "Email sudah terdaftar" },
      { status: 409 }
    );
  }

  const user = await prisma.user.create({
    data: {
      nama,
      email,
      password: await hashPassword(password),
      role: "USER",
    },
  });

  return NextResponse.json({
    message: "Registrasi berhasil",
    user: {
      id: user.id,
      nama: user.nama,
      email: user.email,
    },
  });
}
  catch (error) {
    return NextResponse.json(
      { message: "Terjadi kesalahan server" },
      { status: 500 }
    );
  }
}