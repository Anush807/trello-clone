import type{ RequestHandler } from "express";
import jwt from "jsonwebtoken";
import { AuthRequest } from "../types/auth";

interface JwtPayload {
  userId: string;
  role: string;
}

export const authenticate: RequestHandler = (req: AuthRequest, res, next) => {
  try {
    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      return res.status(401).json({ message: "Unauthorized" });
    }

    const token = authHeader.split(" ")[1];
     console.log(jwt.decode(token));

    if(!token) return;

    if (!process.env.JWT_SECRET) {
      throw new Error("JWT_SECRET not defined");
    }

    const decoded = jwt.verify(
        token,
        process.env.JWT_SECRET
    ) as unknown as JwtPayload;


    req.user = {
      id: decoded.userId,
      role: decoded.role as any,
    };

    next();
  } catch (error) {
    return res.status(401).json({ message: "Invalid or expired token" });
  }
};
