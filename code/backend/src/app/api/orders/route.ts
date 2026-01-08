import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { verifyToken } from "@/lib/auth";


export async function POST(req: Request) { try {
  const authHeader = req.headers.get("authorization");
  
}}