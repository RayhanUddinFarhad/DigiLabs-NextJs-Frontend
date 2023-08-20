import mongoose from "mongoose";

const { Schema } = mongoose;

const header = new Schema(
  {
    header: {
      type: String,
      required: true,
    }
    
    
  },
  { timestamps: true }
);

const Header = mongoose.models.Header || mongoose.model("Header", header);

export default Header;