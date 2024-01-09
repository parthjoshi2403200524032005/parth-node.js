import mongoose from "mongoose";

const todoSchema = new mongoose.Schema(
  {
    content: {
      type: String,
      required: true,
    },
    complete: {
      type: Boolean,
      default: false,
    },
    createdAt: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "user",
      subtodos: [
        {
          type: mongoose.Schema.Types.ObjectId,
          ref: "subtodo",
        },
      ],
    },
  },
  { timestamps: true }
);

export const todo = mongoose.model("todo", todoSchema);
