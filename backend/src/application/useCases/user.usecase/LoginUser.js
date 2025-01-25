import bcrypt from 'bcrypt';
// import authService from "../../../domain/services/auth.service.js";
import AuthService from "../../../domain/services/auth.service.js";
import ApiError from "../../../utils/ApiError.js";

const authService = new AuthService()
async function loginUser(userRepository,email,password) {
    // const user = await userRepository.findByEmail({email:email});
    const user = await userRepository.findByEmail(email);

    if(!user){
        throw new ApiError("User does not registered");
    }

    if(!user.isVerified){
        throw ApiError(400,"User not verified");
    }


    const isValidPassword = await bcrypt.compare(password, user.password);
    if(!isValidPassword)
        throw new Error("Invalid Password");

    const {accessToken,refreshToken} = await userRepository.createTokens(user);

    return  {accessToken,refreshToken};


}
export default loginUser