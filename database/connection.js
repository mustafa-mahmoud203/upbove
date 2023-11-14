import mongoose from "mongoose";

const connectDB = async () => {
  return await mongoose
    .connect(process.env.CONNECTION_PATH)
    .then(() => {
      console.log("Data base connected");
    })
    .catch((err) => {
      console.log(`fail to connect data base........${err}`);
    });
};

export default connectDB;
