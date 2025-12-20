import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { comparePassword } from "@/lib/hash";
import { signToken } from "@/lib/jwt";

export async function POST(req: Request) {
  const { email, password } = await req.json();

  const user = await prisma.user.findUnique({
    where: { email },
  });

  if (!user) {
    return NextResponse.json(
      { message: "User tidak ditemukan" },
      { status: 404 }
    );
  }

  const valid = await comparePassword(password, user.password);

  if (!valid) {
    return NextResponse.json(
      { message: "Password salah" },
      { status: 401 }
    );
  }

  const token = signToken({
    id: user.id,
    role: user.role,
  });

  return NextResponse.json({
    message: "Login berhasil",
    token,
    role: user.role,
  });
}