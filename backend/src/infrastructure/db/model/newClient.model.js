import  mongoose ,{Schema} from "mongoose";

const newClientSchema = new Schema({
  id: {
    type: Schema.Types.Mixed, 
    required: true,
    unique: true,
  },
  admin_id: {
    type: Schema.Types.Mixed,
    required: true,
  },
  Name: {
    type: String,
    required: true,
    trim: true,
  },
  address: {
    type: String,
    required: true,
    trim: true,
  },
  phone_number: {
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
  order_id: {
    type: Schema.Types.Mixed,
    required: false,
  },
}, 
  
);
export default mongoose.model('NewClient',newClientSchema);

