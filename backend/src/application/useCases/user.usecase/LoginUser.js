import bcrypt from 'bcrypt';
// import authService from "../../../domain/services/auth.service.js";
import AuthService from "../../../domain/services/auth.service.js";

const authService = new AuthService()
async function loginUser(userRepository,email,password) {
    // const user = await userRepository.findByEmail({email:email});
    const user = await userRepository.findByEmail(email);
    if(!user)
        throw new Error("User not found");
    const isValidPassword = await bcrypt.compare(password, user.password);
    if(!isValidPassword)
        throw new Error("Invalid Password");

    const token = await userRepository.createTokens(user);

    return  token;


}
export default loginUser