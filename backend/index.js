import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import mongoose from "mongoose";

import albumRoutes from "./routes/albums.js";
import uploadRoutes from "./routes/upload.js";
import authRoutes from "./routes/auth.js";
dotenv.config();

const PORT = process.env.PORT || 5000;


const app = express();

app.use(cors());
app.use(express.json());

app.use("/uploads",express.static("uploads"));
app.use("/albums", albumRoutes);
app.use("/upload", uploadRoutes);
app.use("/auth", authRoutes);
app.get("/", (req,res)=>{
   res.send("Backend is running");
})

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.log(err));

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
