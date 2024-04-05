import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";

import database from "./db/database.js";

dotenv.config();
database();

const app = express();

const PORT = process.env.PORT || 5000;

// Middlewares
app.use(express.json()); // To parse JSON data in the req.body
app.use(express.urlencoded({ extended: true })); // To parse form data in the req.body
app.use(cookieParser());


app.listen(PORT, () => {
  console.log(`🌐 Server started at port ${PORT}`);
});
