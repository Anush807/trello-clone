import { Request } from "express";
import { userRole } from "../models/User";

export interface AuthRequest extends Request {
  user?: {
    id: string;
    role: userRole;
  };
}
