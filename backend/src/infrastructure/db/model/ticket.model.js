import  mongoose ,{Schema} from "mongoose";

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
    last_updated: {
      type: Date, 
      default: Date.now,
    },
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
      required: true,
    },
  },
 
);

export const Ticket = mongoose.model('Ticket', newTicketSchema);


