import { prisma } from "@/lib/prisma";
import { hashPassword } from "@/lib/hash";

export async function POST(req) {
  const { nama, email, password } = await req.json();

 if (!nama || !email || !password) {
    return Response.json({ message: "Data tidak lengkap" }, { status: 400 });
  }

   const exist = await prisma.user.findUnique({ where: { email } });
  if (exist) {
    return Response.json({ message: "Email sudah terdaftar" }, { status: 409 });
  }

    const hashed = await hashPassword(password);

      const user = await prisma.user.create({
    data: {
      nama,
      email,
      password: hashed,
    },
  });