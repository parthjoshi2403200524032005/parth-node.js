import mongoose from "mongoose";

const userSchema = new mongoose.Schema (
    {

    },{timestamps:true}
)

export const user = mongoose.model("user", userSchema)