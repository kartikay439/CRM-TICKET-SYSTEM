import bcrypt from "bcrypt"
import User from "../../../domain/entities/User.js"
import {use} from "bcrypt/promises.js";

async function registerUser(userRepository,userData)
{
    const existingUser = await userRepository.findByEmail(userData.email);
    if(existingUser){
        throw new Error("User already exists")
    }

    //Password is encrypted
    const hashedPassword = await bcrypt.hash(userData.password, 10)
    const user = new User(userData.full_name,userData.email,hashedPassword)
    return await userRepository.save(user)
}

export default registerUser