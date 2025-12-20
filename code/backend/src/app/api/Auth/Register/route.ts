import { prisma } from "@/lib/prisma";
import { hashPassword } from "@/lib/hash";

export async function POST(req) {
  const { nama, email, password } = await req.json();