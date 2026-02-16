import express from "express";
import "dotenv/config";
import authRoute from "./routes/authRoutes"
import boardRoute from "./routes/boardRoute"
import cardRoute from "./routes/cardRoute"
import { connectDB } from "../src/config/db";
import { authenticate } from "./middleware/authMiddleware"
import { authorize } from "./middleware/authorize"
import { userRole } from "./models/User";

connectDB();
const PORT = process.env.PORT
const app = express();

app.use(express.json());



app.use("/authroute", authRoute)
app.use("/board", authenticate, authorize([userRole.ADMIN]), boardRoute)
app.use("/card", authenticate, cardRoute)

app.listen(PORT, () => console.log(`Server is runnnig on port ${PORT}`));

