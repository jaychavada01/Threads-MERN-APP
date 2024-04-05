import express from "express";
import dotenv from "dotenv";

import database from "./db/database.js";

dotenv.config();
database();

const app = express();

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`🌐 Server started at http://localhost:${PORT}`);
});
