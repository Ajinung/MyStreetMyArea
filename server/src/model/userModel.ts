import mongoose from "mongoose";
import { userAuth } from "../interfaces/allInterfaces";




interface UAuth extends userAuth, mongoose.Document {}

const userSchema = new mongoose.Schema<userAuth>(
  {
   
    userName: {
      type: String,
      required: [true, "please enter your name"],
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
    },
    password: {
      type: String,
      required: true,
      min: 6,
    },
    phoneNum: {
      type: String,
    },
    location : {
      type : String
    }
  },
  { timestamps: true }
);

const userModel = mongoose.model<UAuth>("allUsers", userSchema);

export default userModel;
