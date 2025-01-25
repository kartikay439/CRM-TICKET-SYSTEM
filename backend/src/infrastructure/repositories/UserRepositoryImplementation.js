import UserModel from '../db/model/user.model.js'
import UserRepository from '../../domain/repositories/UserRepository.js'
// import user from "../../domain/entities/User.js";
import ApiError from "../../utils/ApiError.js";
import AuthService from "../../domain/services/auth.service.js";
// import authService from "../../domain/services/auth.service.js";
// import {use} from "bcrypt/promises.js";

class UserRepositoryImpl extends UserRepository {

    async findByEmail(email) {
        return UserModel.findOne({email});
    }

    // Already Existing User will get token on first login
    async createTokens(user) {
        const authService = new AuthService();

        console.log("Creating tokens for user with email:", user.email);

        try {
            const userFound = await this.findByEmail(user.email);
            if (!userFound) {
                throw new ApiError(400, 'Please do sign up first');
            }

            console.log(userFound)
            // Check if 'name' is present
            if (!userFound.name) {
                throw new ApiError(400, 'User name is required');
            }

            const accessToken = authService.generateAccessToken(userFound);
            const refreshToken = authService.generateRefreshToken(userFound);

            console.log("Saving accessToken");
            userFound.refreshToken = refreshToken;
            await userFound.save({ validateBeforeSave: true });
            return accessToken;
        } catch (error) {
            console.error("Error creating tokens:", error);
            throw error;
        }
    }




    // The user here we will get save on db Its for new USER
    async save(user) {
        console.log(
            user.email
        )
        try {
            const userOnDB = await UserModel.create(
                {
                    email: user.email.toString(),
                    password: user.password.toString(),
                    name: user.name.toString(),
                }
            )
            console.log(user + "user on domain model")
            return userOnDB;
        }
        catch (error) {
            console.error("Error saving user:", error);
        }

    }
}

export default UserRepositoryImpl