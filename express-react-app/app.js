import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import requestRoute from "./routes/requestsRoute.js";
import userRoute from "./routes/userRoute.js";
import cookieParser from "cookie-parser";
import "dotenv/config";

const app = express();

// app.use(cors());
app.use(
  cors({
    credentials: true,
  })
);
app.use(express.json());
app.use(cookieParser());
app.use("/requests", requestRoute);
app.use("/users", userRoute);

const start = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_CONNECTION_STRING);
    app.listen(3005, async () => {
      console.log("server started on port 3005");
    });
  } catch (e) {
    console.log(e);
  }
};

start();
