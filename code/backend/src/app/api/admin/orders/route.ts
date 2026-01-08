import { NextResponse } from "next/server";


export async function GET(req: Request) {
  const userHeader = req.headers.get("user");
