import { Schema, model } from "mongoose";

const UserSchema = new Schema({
  username: {
    type: String,
    required: true,
    trim: true,
    minLength: 3,
    unique: true,
  },
  name: {
    type: String,
    required: true,
    trim: true,
    minLength: 2,
  },
  password: {
    type: String,
    required: true,
    minLength: 6,
  },
  avatar: {
    type: String,
  },
});

export const User = model("User", UserSchema);
