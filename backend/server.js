import path from "path";
import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import { v2 as cloudinary } from "cloudinary";

import database from "./db/database.js";

import userRoutes from "./routes/user.routes.js";
import postRoutes from "./routes/post.routes.js";

dotenv.config();
database();

const app = express();

const PORT = process.env.PORT || 5000;
const __dirname = path.resolve();

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

// Middlewares
app.use(express.json({ limit: "50mb" })); // To parse JSON data in the req.body
app.use(express.urlencoded({ extended: true })); // To parse form data in the req.body
app.use(cookieParser());

// Routes
app.use("/api/users", userRoutes);
app.use("/api/posts", postRoutes);

// http://localhost:5000 => backend,
// http://localhost:3000 => frontend,

app.use(express.static(path.join(__dirname, "/frontend/dist")));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "frontend", "dist", "index.html"));
});

app.listen(PORT, () => {
  console.log(`🌐 Server started at port ${PORT}`);
});
