import mongoose from "mongoose";

const dbUrl = "mongodb://localhost:27017/authBasic";

export const connectDb = async () => {
  try {
    await mongoose.connect(dbUrl);
    console.log("Connected to MongoDB");
  } catch (error) {
    console.log(error);
  }
};
