import mongoose, {Schema} from "mongoose";

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
        description: {
            type: String,
            required: [true, 'Subject is required'],
            trim: true,
            maxlength: [255, 'Subject cannot exceed 255 characters'],
        },
        status: {
            type: String,
            enum: ['open', 'in-progress', 'resolved', 'closed'],
            default: 'open',
        },
        lastUpdated: {
            type: Date,
            default: Date.now,
        },
        productImageUrl: {
            type: String,
        },
        invoiceImageUrl: {
            type: String,
        },
        userId: {
            type: Schema.Types.ObjectId,
            required: true,
        },
        assignedAdminId: {
            type: Schema.Types.ObjectId,
            // required: true,
        },
    }
);

export const Ticket = mongoose.model('Ticket', newTicketSchema);


