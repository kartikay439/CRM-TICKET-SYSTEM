import bcrypt from "bcrypt"
import User from "../../entities/User.js"
import ApiError from "../../../utils/ApiError.js"
// import {use} from "bcrypt/promises.js";

async function registerUser(userRepository,userData)
{
    const existingUser = await userRepository.findByEmail(userData.email);
    if(existingUser){
        throw new ApiError(400,"User already exists")
    }

    //Password is encrypted
    const hashedPassword = await bcrypt.hash(userData.password, 10)

    //user model
    const user = new User(userData.name,userData.email,hashedPassword)
    return await userRepository.save(user)
}

export default registerUser