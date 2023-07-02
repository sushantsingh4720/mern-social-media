import mongoose from "mongoose";

const connectDB = (req, res) => {
  const connectionparams = { useNewUrlParser: true };
  mongoose.connect(process.env.MONGO_URL, connectionparams);
  mongoose.set("runValidators", true);
  mongoose.set("strictQuery", false);
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
