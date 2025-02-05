import mongoose,{Schema} from "mongoose";
import ChatAdminVsUser from "../../../domain/entities/ChatAdminVsUser.js";

const ChatAdminVsUserSchema = new Schema({ 
    id: {
        type: Schema.Types.ObjectId,
        ref : "ChatAdminVsUser",
        required: true,
    },
    adminId: {
        type: Schema.Types.ObjectId,
        ref: "ChatAdminVsUser",
        required: true,
    },
    userId: {
        type: Schema.Types.ObjectId,
        required: true,
    },
    message: {
        type: String,
        required: true,
    },
    ticketId: {
        type: Schema.Types.ObjectId,
        required: true,
    },
});

export default mongoose.model('ChatAdminVsUser', ChatAdminVsUserSchema);
