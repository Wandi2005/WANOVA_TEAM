import { NextResponse } from "next/server";


export async function GET(req: Request) {
  const userHeader = req.headers.get("user");
if (!userHeader) {
    return NextResponse.json(
       { message: "Unauthorized" },
      { status: 401 }
    );
  }
    const user = JSON.parse(userHeader);
