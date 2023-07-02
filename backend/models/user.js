import validator from "validator";
import mongoose from "mongoose";
const userSchema = mongoose.Schema(
  {
    firstName: {
      type: String,
      required: [true, "firstName is required"],
      set: (value) => value.replace(/\s/g, ""),
      min: 3,
      max: 50,
    },
    lastName: {
      type: String,
      min: 3,
      max: 50,
    },
    email: {
      type: String,
      required: [true, "email is required"],
      validate: [validator.isEmail, "Please provide a valid email address"],
      unique: true,
      lowercase: true,
      trim: true,
      max: 50,
    },
    password: {
      type: String,
      required: [true, "password is required"],
      min: 6,
      select: false,
    },
    avatar: {
      public_id: String,
      url: String,
    },
    friends: {
      type: Array,
      default: [],
    },
    location: String,
    occupation: String,
    viewedProfile: { type: Number, default: 0 },
    impressions: { type: Number, default: 0 },
    status: {
      type: String,
      enum: ["pending", "active"],
      default: "pending",
    },
    confirmationCode: String,
  },
  { timestamps: true }
);
export default mongoose.model("User", userSchema);
