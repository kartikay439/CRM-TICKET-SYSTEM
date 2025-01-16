import bcrypt from 'bcrypt';

async function loginUser(userRepository,authService,email,password) {
    const user = await userRepository.findByEmail({email:email});
    if(!user)
        throw new Error("User not found");
    const isValidPassword = await bcrypt.compare(password, user.password);
    if(!isValidPassword)
        throw new Error("Invalid Password");

    return authService.generateAccessToken(user);
}
export default loginUser