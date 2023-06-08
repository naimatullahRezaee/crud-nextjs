import mongoose, { mongo } from "mongoose";

let isConneted = false;

export const connectToDB = async () => {
  mongoose.set("strictQuery", true);
  if (isConneted) {
    console.log("Mongoose is already connected");
    return;
  }

  try {
    await mongoose.connect(process.env.MONGODB_URL, {
      dbName: "CRUD APP",
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    isConneted = true;
    console.log("mongoDB connected");
  } catch (error) {
    console.log(error);
  }
};
