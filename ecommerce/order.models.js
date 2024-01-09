import mongoose from "mongoose";

const orderitem = new mongoose.Schema({
  productId: { 
    type: mongoose.Schema.Types.ObjectId,
     ref: "product" 
    },
  quantity: {
    type: Number,
    required: true,
  },
});

const orderSchema = new mongoose.Schema(
  {
    orderPrice: {
      type: Number,
      required: true,
    },
    customer: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "user",
    },
    orderitem:{
        type: [orderitem],
        
    },
    address:{
        type: String,
        required: true
    },
    status:{
        type: String,
        enum: ["pending", "cancelled", "delivered"],
        default: "pending"
    }
  },
  { timestamps: true }
);

export const order = mongoose.model("order", orderSchema);
