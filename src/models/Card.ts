import mongoose, { Schema, Document, Model, Types } from "mongoose"

export interface ICard extends Document{
    title: string,
    description: string
    board: Types.ObjectId
    createdBy: Types.ObjectId
}

const cardSchema: Schema<ICard> = new Schema({
    title: {
        type: String,
        required: true,
    },
    description:{
        type: String,
        required: true
    },
    board:{
        type: Schema.Types.ObjectId,
        ref: "Board"
    },
    createdBy: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true
    }, 
})

export const Card =
  mongoose.models.Card ||
  mongoose.model<ICard>("Card", cardSchema);
