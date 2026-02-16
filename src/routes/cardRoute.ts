import express from "express";
import { createCard } from "../controller/cardController"

const router = express.Router();

router.post("/create", createCard);

export default router;