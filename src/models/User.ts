import mongoose ,{ Schema, Model, Document } from "mongoose"

export enum userRole {
    ADMIN = "ADMIN",
    USER = "USER"
}

export interface IUser extends Document{
    name: string,
    email: string,
    password: string,
    role: userRole,
    createdAt: Date,
    updatedAt: Date
}

const userSchema: Schema<IUser> = new Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },

    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
    },

    password: {
      type: String,
      required: true,
      minlength: 6,
    },

    role: {
      type: String,
      enum: Object.values(userRole),
      default: userRole.USER,
    },
  },
  {
    timestamps: true,
  }
);

export const User: Model<IUser> =
  mongoose.models.User || mongoose.model<IUser>("User", userSchema);


