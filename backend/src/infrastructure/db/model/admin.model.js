import mongoose,{Schema} from "mongoose";
import Admin from "../../../domain/entities/Admin.js";

const AdminSchema = new Schema(
    {
        name:{
            type:Schema,
            required:true,
        },
        email:{
            type:String,
            required:true,
        },
        password:{
            type:String,
            required:true,
        }
    }
);

export default mongoose.model('Admin', AdminSchema);