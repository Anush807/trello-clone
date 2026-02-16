import mongoose, { Schema, Document, Model, Types } from "mongoose"

export interface IBoard extends Document{
    title: string,
    owner: Types.ObjectId,
    members: Types.ObjectId,
    createdAt: Date,
    updatedAt: Date
}

const boardSchema: Schema<IBoard> = new Schema({
    title: {
        type: String,
        required: true,
    },
    owner: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true
    }, 
    members:[
        {
            type: Schema.Types.ObjectId,
            ref: "User"
        }
    ]
})

export const Board =
  mongoose.models.Board ||
  mongoose.model<IBoard>("Board", boardSchema);
