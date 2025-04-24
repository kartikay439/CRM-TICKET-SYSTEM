import bcrypt from 'bcrypt';
// import authService from "../../../domain/services/auth.service.js";
import AuthService from "../../services/auth.service.js";
import ApiError from "../../../utils/ApiError.js";

const authService = new AuthService()
async function loginUser(userRepository,email,password) {
    // const user = await userRepository.findByEmail({email:email});
    const user = await userRepository.findByEmail(email);
    console.log(user);

    if(!user){
        console.log("user not found");
        throw new ApiError(400,"User does not registered");
    }

    if(!user.isVerified){
        throw new ApiError(400,"User not verified");
        //open otp page
    }


    const isValidPassword = await bcrypt.compare(password, user.password);
    if(!isValidPassword)
        throw new ApiError(400,"Invalid Password");

    const {accessToken,refreshToken} = await userRepository.createTokens(user);

    return  {accessToken,refreshToken};


}
export default loginUser