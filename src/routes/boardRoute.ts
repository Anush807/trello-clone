import express from "express";
import { createBoard } from "../controller/boardController"

const router = express.Router();

router.post("/create", createBoard);

export default router