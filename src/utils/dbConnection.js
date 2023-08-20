import mongoose from "mongoose";

const connectMongoDB = async () => {
  try {
    await mongoose.connect(`mongodb+srv://digilabs:0PsPY9coAf3Py9kr@cluster0.9qpxu0o.mongodb.net/?retryWrites=true&w=majority`);
    console.log("Connected to MongoDB.");
  } catch (error) {
    console.log(error);
  }
};

export default connectMongoDB;