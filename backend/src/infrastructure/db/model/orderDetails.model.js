import mongoose,{Schema} from "mongoose";
import OrderDetails from "../../../domain/entities/OrderDetails.js";

const OrderDetailsSchema = new Schema({
    order_id:{
        type:Schema.Types.ObjectId,
        required:true,
    },
    order_data:{
        type:Date,
        required:true,
    },
    purchase_id:{
        type:Schema.Types.ObjectId,
        required:true,
    },
});

export default mongoose.model('orderDetails',OrderDetailsSchema);
