import { NextRequest } from "next/server";
import { prisma } from "@/lib/prisma";
import { hashPassword } from "@/lib/hash";

export async function POST(req: NextRequest) {
  try {
    const { nama, email, password } = await req.json();

      if (!nama || !email || !password) {
      return Response.json(
        { message: "Data tidak lengkap" },
        { status: 400 }
      );
    }

      const existingUser = await prisma.user.findUnique({
      where: { email },
    });

     if (existingUser) {
      return Response.json(
        { message: "Email sudah terdaftar" },
        { status: 409 }
      );
    }

     const hashedPassword = await hashPassword(password);
