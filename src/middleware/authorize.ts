import type{ RequestHandler } from "express";
import { userRole } from "../models/User";
import { AuthRequest } from "../types/auth";

export const authorize =
  (allowedRoles: userRole[]): RequestHandler =>
  (req: AuthRequest, res, next) => {
    if (!req.user) {
      return res.status(401).json({ message: "Unauthorized" });
    }

    if (!allowedRoles.includes(req.user.role)) {
      return res.status(403).json({ message: "Forbidden" });
    }

    next();
  };
