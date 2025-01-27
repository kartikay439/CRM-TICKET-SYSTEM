import mongoose,{Schema} from "mongoose";
import ChatAdminVsUser from "../../../domain/entities/ChatAdminVsUser.js";

const ChatAdminVsUserSchema = new Schema({ 
    id: {
        type: Schema.Types.ObjectId,
        required: true,
    },
    admin_id: {
        type: Schema.Types.ObjectId,
        required: true,
    },
    user_id: {
        type: Schema.Types.ObjectId,
        required: true,
    },
    message: {
        type: String,
        required: true,
    },
    ticket_id: {
        type: Schema.Types.ObjectId,
        required: true,
    },
});

export default mongoose.model('ChatAdminVsUser', ChatAdminVsUserSchema);
