import express from "express";
import cors from "cors";
import multer from "multer";
import path from "path";
import { fileURLToPath } from "url";
import { config } from "dotenv";
import connectDB from "./config/connectDB.js";
import { register } from "./controllers/auth.js";
config();
connectDB();
//CONFIGURATION//
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
app.use(cors());
app.use(express.json({ limit: "30mb", extended: true }));
app.use(express.urlencoded({ limit: "30mb", extended: true }));
app.use("assests", express.static(path.join(__dirname, "public/assets")));
app.get("/", (req, res) => {
  res.status(200).json({ success: true, message: "API is working" });
});

//FILE STORAGE//
const storage = multer.diskStorage({
  destinatio: (cb) => {
    cb(null, "public/assets");
  },
  filename: (file, cb) => {
    cb(null, file.originalname);
  },
});
const upload = multer({ storage });

/* ROUTES WITH FILES */
app.post("/api/auth/register", upload.single("picture"), register);
const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server Listening on port ${port}...`);
});
