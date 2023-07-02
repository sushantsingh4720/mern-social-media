import mongoose from "mongoose";

const connectDB = (req, res) => {
  mongoose.connect(process.env.MONGO_URL);
  mongoose.set("runValidators", true);
  mongoose.set("strictQuery", true);
  mongoose.connection.on("connecting", () => {
    console.log("Start connecting to Mongoose server");
  });
  mongoose.connection.on("connected", () => {
    console.log("Connected to Mongoose server");
  });
  mongoose.connection.on("error", (err) => {
    console.log(`Error connecting to Mongoose server: ${err.message}`);
  });
  mongoose.connection.on("disconnect", () => {
    console.log("Disconnect from Mongoose server");
  });
};
export default connectDB;
