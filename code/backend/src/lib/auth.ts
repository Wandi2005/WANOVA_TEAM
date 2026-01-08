import { verify } from "jsonwebtoken";

export function verifyToken(token: string): { id: number } {
  const decoded = verify(token, process.env.JWT_SECRET!) as { id: number };
  return decoded;
}
