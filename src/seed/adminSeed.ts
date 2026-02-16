import mongoose from "mongoose";
import bcrypt from "bcryptjs";
import dotenv from "dotenv";
import { User, userRole } from "../models/User";

dotenv.config();

async function seedAdmin() {
  try {
    if (!process.env.MONGO_URI) {
      throw new Error("MONGO_URI not defined");
    }
    await mongoose.connect(process.env.MONGO_URI);
    console.log("MongoDB connected");

    const existingAdmin = await User.findOne({
      email: "admin@example.com",
    });

    if (existingAdmin) {
      console.log("Admin already exists");
      process.exit(0);
    }

    const hashedPassword = await bcrypt.hash("admin123", 10);

    await User.create({
      name: "Admin",
      email: "admin@example.com",
      password: hashedPassword,
      role: userRole.ADMIN,
    });

    console.log("Admin created successfully");

    process.exit(0);
  } catch (error) {
    console.error("Error:", error);
    process.exit(1);
  }
}

seedAdmin();
