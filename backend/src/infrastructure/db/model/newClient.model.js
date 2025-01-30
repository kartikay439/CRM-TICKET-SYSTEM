import  mongoose ,{Schema} from "mongoose";

const newClientSchema = new Schema({
  id: {
    type: Schema.Types.Mixed, 
    required: true,
    unique: true,
  },
  adminId: {
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
  order: {
    type: String,
    required: false,
  },
  orderId: {
    type: Schema.Types.Mixed,
    required: false,
  },
}, 
  
);
export default mongoose.model('NewClient',newClientSchema);

