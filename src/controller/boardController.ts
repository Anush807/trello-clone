import { AuthRequest } from "../types/auth";
import { Response } from "express";
import { Board } from "../models/Board";

export const createBoard = async (
  req: AuthRequest,
  res: Response
) => {
  try {
    console.log(req.user)
    if (!req.user) {
      return res.status(401).json({ message: "Unauthorized" });
    }

    const board = await Board.create({
      title: req.body.title,
      owner: req.user.id,    // 👈 THIS IS IMPORTANT
    });

    res.status(201).json(board);
  } catch (error) {
    res.status(500).json({
      message: "Error while creating board",
      error,
    });
  }
};
