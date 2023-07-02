import express from "express";
import cors from "cors";
import { config } from "dotenv";
import fileUpload from "express-fileupload";
import cloudinary from "cloudinary";
import connectDB from "./config/connectDB.js";
import authRoute from "./routes/auth.js";
import authMiddleware from "./middleware.js/auth.js";
config();
connectDB();

const app = express();
app.use(cors());
app.use(express.json({ limit: "50mb", extended: true }));
app.use(express.urlencoded({ limit: "50xmb", extended: true }));
app.use(
  fileUpload({
    limits: { fileSize: 50 * 1024 * 1024 },
    useTempFiles: true,
  })
);

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.CLOUD_API_KEY,
  api_secret: process.env.CLOUD_API_SECRET,
});
app.get("/", (req, res) => {
  res.status(200).json({ success: true, message: "API is working" });
});

//ROUTES
app.use("/api/auth", authRoute);
app.use(authMiddleware);
const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server Listening on port ${port}...`);
});
