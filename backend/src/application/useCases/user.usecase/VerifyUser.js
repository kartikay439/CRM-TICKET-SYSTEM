import jwt from 'jsonwebtoken';
import ApiError from "../../../utils/ApiError.js";


async function verify(token,otp,repo){
    const decodedToken =await jwt.verify(token,process.env.VERIFY_TOKEN_SECRET);

    console.log("inside verify use case");
    //for every data operation use data layer;
    const user = await repo.findByEmail(decodedToken.email);
    if (!user) {
        throw new ApiError(404,'first do registration');
    }

    const decodedOtp = decodedToken.otp.toString();
    const otpByUserForm = otp.toString();

    if(decodedOtp === otpByUserForm){
        user.isVerified = true;
        await user.save({validateBeforeSave: true})
        return true
    }
    else{
        return false;
    }

}

export default verify;

