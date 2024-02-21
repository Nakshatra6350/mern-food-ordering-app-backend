import express from "express"
import { Request, Response } from "express";
import cors from "cors"
import "dotenv/config"
import mongoose, { mongo } from "mongoose";
import myUserRoute from "./routes/MyUserRoute"
mongoose.connect(process.env.MONGODB_CONNECTION_STRING as string).then(() => {
    console.log("Database is connected")
})

const app = express();
app.use(express.json());
app.use(cors());

app.get("/health", async (req: Request, res: Response) => {
    res.send({ message: "Health Okay!!" })
})
app.use("/api/my/user", myUserRoute)

app.listen(7000, () => {
    console.log("server is listening on port 7000")
})