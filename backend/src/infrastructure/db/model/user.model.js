import  mongoose ,{Schema} from "mongoose"
const UserSchema = new Schema(
    {
        name: {
            type:String,
            required:true
        },
        email:{
            type:String,
            required:true,
            // unique:true
        },
        password: {
            type:String,
            required:true,
        },
        isAdmin:{
            type:Boolean,
            default:false,
        },
        isVerified: {
            type:Boolean,
            default:false
        },
        //suppose if token cookie cleared
        refreshToken:{
            type:String,
        }

    }
);
export default mongoose.model('User',UserSchema);