import  mongoose ,{Schema} from "mongoose";
import OrderDetailsModel from "./orderDetails.model.js";

const newClientSchema = new Schema({
  id: {
    type: Schema.Types.Mixed, 
    required: true,
    unique: true,
  },
<<<<<<< HEAD:backend/src/infrastructure/db/model/newClient.model.js
  adminId: {
=======
  adminId:{
>>>>>>> 1c4cd619fb228bb904eef6b33762db508ea79985:backend/src/infrastructure/db/model/client.model.js
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
<<<<<<< HEAD:backend/src/infrastructure/db/model/newClient.model.js
  order: {
    type: String,
    required: false,
  },
  orderId: {
    type: Schema.Types.Mixed,
    required: false,
=======
  orderId: {
    type: mongoose.Schema.Types.ObjectId,
    name:OrderDetailsModel,
>>>>>>> 1c4cd619fb228bb904eef6b33762db508ea79985:backend/src/infrastructure/db/model/client.model.js
  },
}, 
  
);
export default mongoose.model('NewClient',newClientSchema);

