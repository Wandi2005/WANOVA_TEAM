import jwt from "jsonwebtoken";

interface JwtPayload {
  id: number;
  role: "ADMIN" | "USER";
  email?: string;
}

export function verifyToken(token: string): JwtPayload {
  return jwt.verify(
    token,
    process.env.JWT_SECRET!
  ) as JwtPayload;
}
