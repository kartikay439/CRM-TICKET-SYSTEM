import mongoose,{Schema} from "mongoose";
import OrderDetails from "../../../domain/entities/OrderDetails.js";

const OrderDetailsSchema = new Schema({
    orderId:{
        type:Schema.Types.ObjectId,
        required:true,
    },
    orderDate:{
        type:Date,
        required:true,
    },
    purchaseId:{
        type:Schema.Types.ObjectId,
        required:true,
    },
});

export default mongoose.model('orderDetails',OrderDetailsSchema);
