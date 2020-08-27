import { Schema, model } from "mongoose";

const Link = new Schema({
  toLink: {
    type: String,
    required: true,
  },
  slug: {
    type: String,
    unique: true,
    required: true,
  },
});

export default model("Link", Link);
