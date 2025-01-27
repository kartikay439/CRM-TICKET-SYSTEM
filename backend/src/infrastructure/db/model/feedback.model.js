import mongoose ,{Schema} from "mongoose";

const FeedbackSchema = new Schema(
    {
      id:{
        type:Schema.Types.ObjectId,
        required:true,
      },
      userId:{
        type:Schema.Types.ObjectId,
        required:true,
      },
      assgnd_admin_id:{
        type:Schema.Types.ObjectId,
        required:true,
      },
        feedback:{
            type:String,
            required:true,
        },
        ticket_id:{
            type:Schema.Types.ObjectId,
            required:true,
        },

    }
);
export default mongoose.model('Feedback', FeedbackSchema);














