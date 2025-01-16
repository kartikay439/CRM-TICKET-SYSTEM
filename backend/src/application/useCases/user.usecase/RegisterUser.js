import bcrypt from "bcrypt"
import User from "../../../domain/entities/User.js"

async function registerUser(userRepository, userData) {
    const existingUser = await userRepository.findByEmail(userData.email);
    if(existingUser){
        throw new Error("User already exists")
    }
    const hashedPassword = await bcrypt.hash(userData.password, 10)
    const user = new User({...userData,password: hashedPassword})
    await userRepository.save(user)
    return user;
}

export default registerUser