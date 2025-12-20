import { prisma } from "@/lib/prisma";
import { comparePassword } from "@/lib/hash";
import { signToken } from "@/lib/jwt";

export async function POST(req) {
  const { email, password } = await req.json();

  if (!email || !password) {
    return Response.json({ message: "Email & password wajib" }, { status: 400 });
  }

   const user = await prisma.user.findUnique({ where: { email } });
  if (!user) {
    return Response.json({ message: "User tidak ditemukan" }, { status: 404 });
  }

  const valid = await comparePassword(password, user.password);
  if (!valid) {
    return Response.json({ message: "Password salah" }, { status: 401 });
  }

    const token = signToken({
    id: user.id,
    role: user.role,
  });

    return Response.json({
    message: "Login berhasil",
    token,
    role: user.role,
  });
}