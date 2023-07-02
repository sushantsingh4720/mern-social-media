import express from "express";
import { config } from "dotenv";
import connectDB from "./config/connectDB.js";
config();
connectDB();

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).json({ success: true, message: "API is working" });
});

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server Listening on port ${port}...`);
});
