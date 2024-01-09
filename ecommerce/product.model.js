import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
  {
    description: {
        required: true ,
        type: String ,
        
    },
    name: {
        required: true ,
        type: String ,
    },
    productImage:{
        type: String ,
       
    },
    price: {
        type: Number ,
        default: 0
    },
    stock:{
    default: 0
    },
    category:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Category",
        required: true
    },
    owner:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "user",
        required: true
        },
     

  },
  { timestamps: true }
);

export const product = mongoose.model("product", productSchema);
