import { RequestHandler } from "express"
import { cardSchema } from "../validation"
import { Card } from "../models/Card"
import { AuthRequest } from "../types/auth";

export const createCard: RequestHandler = async (req: AuthRequest, res) => {
    try{
         const parsedData = cardSchema.parse(req.body);
    const { title, description } = parsedData;

    const card = await Card.create({
        title,
        description,
        createdBy: req.user?.id
    })
    res.json({
        card
    })
    }catch(error){
        res.json(error)
    }
}
