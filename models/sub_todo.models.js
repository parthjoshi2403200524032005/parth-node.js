import mongoose from "mongoose";

const subtodoSchema = new mongoose.Schema({
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
    },
}, { timestamps: true });

export const subtodo = mongoose.model("subtodo", subtodoSchema);
