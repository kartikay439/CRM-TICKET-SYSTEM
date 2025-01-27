import  mongoose ,{Schema} from "mongoose";
import OrderDetailsModel from "./orderDetails.model.js";

const newClientSchema = new Schema({
  id: {
    type: Schema.Types.Mixed, 
    required: true,
    unique: true,
  },
  adminId:{
    type: Schema.Types.Mixed,
    required: true,
  },
  name: {
    type: String,
    required: true,
    trim: true,
  },
  address: {
    type: String,
    required: true,
    trim: true,
  },
  phoneNumber: {
    type: Number,
    required: true,
   
  },
  company: {
    type: String,
    required: true,
    trim: true,
  },
  orderId: {
    type: mongoose.Schema.Types.ObjectId,
    name:OrderDetailsModel,
  },
}, 
  
);
export default mongoose.model('NewClient',newClientSchema);

