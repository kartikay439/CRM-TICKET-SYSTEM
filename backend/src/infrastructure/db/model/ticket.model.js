import  mongoose ,{Schema} from "mongoose";
imp
const newTicketSchema = new Schema(
  {
    // id: {
    //   type: Schema.Types.Decimal128,
    //   required: true,
    //   unique: true,
    // },
    subject: {
      type: String, 
      required: [true, 'Subject is required'],
      trim: true,
      maxlength: [255, 'Subject cannot exceed 255 characters'],
    },
    status: {
      type: String, 
      enum: ['open', 'in-progress', 'resolved', 'closed'],
      default: 'open',
      required: true,
    },
    lastUpdated: {
      type: Date, 
      default: Date.now,
    },
<<<<<<< HEAD
    userId: {
      type: Schema.Types.Decimal128, 
      required: true,
    },
    assignedAdminId: {
      type: Schema.Types.Decimal128, 
      required: true,
    },
    purchaseId: {
      type: Schema.Types.Decimal128, 
=======
    user_id: {
      type: String,
      required: true,
    },
    assigned_admin_id: {
      type: String ,
      required: true,
    },
    purchase_id: {
      type: String,
>>>>>>> 1c4cd619fb228bb904eef6b33762db508ea79985
      required: true,
    },
  },
 
);

export const Ticket = mongoose.model('Ticket', newTicketSchema);


