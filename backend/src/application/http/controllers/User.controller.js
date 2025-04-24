import {asyncHandler} from "../../../utils/AsyncHandler.js";
import ApiResponse from "../../../utils/ApiResponse.js";
import registerUser from "../../../domain/useCases/user.usecase/RegisterUser.js";
import loginUser from "../../../domain/useCases/user.usecase/LoginUser.js";
import userRepositoryImplementation from "../../../infrastructure/repositories/UserRepositoryImplementation.js";
import {sendVerificationEmail} from "../../../utils/Email.js";
import apiResponse from "../../../utils/ApiResponse.js";
import ApiError from "../../../utils/ApiError.js";
import jwt from "jsonwebtoken";
import verify from "../../../domain/useCases/user.usecase/VerifyUser.js";
import UserModel from "../../../infrastructure/db/model/user.model.js";
import AuthService from "../../../domain/services/auth.service.js";

const repo = new userRepositoryImplementation()

const options = {
    httpOnly: true,
    secure: true,
}


const signup = asyncHandler(
    async (req, res, {registerUseCase, userRepository}) => {
        //testing purpose
        const {email, name, password} = req.body;
        console.log(name, email, password);
        // console.log(registerUseCase);

        const user = await registerUser(repo, {
            email,
            name,
            password,
        })

        // const auth = new AuthService();

        console.log(user);

        if (!user) {
            throw new ApiError("registration unsuccessfully");
        }


        const otp = Math.ceil(1000 + Math.random() * 9000);

        const isSend = await sendVerificationEmail(email, otp)
        if (!isSend) {
            console.log("code not send")
        }

        const token = jwt.sign(
            {
                email,
                otp
            },
            process.env.VERIFY_TOKEN_SECRET,
            {
                expiresIn: process.env.VERIFY_TOKEN_EXPIRY,
            }
        )

        // here token will go
        //tke will contain id

        res.status(200).cookie("token", token, options).cookie("email", user.email)
            .json(
                new ApiResponse(
                    200,
                    user,
                    "User registered successfully"
                )
            )

    }
)

const verifyUser = asyncHandler(
    async (req, res) => {
        const otp = req.body.otp;
        const token = req.cookies?.token;

        console.log("token", token);
        console.log(jwt.verify(token, process.env.VERIFY_TOKEN_SECRET).email);
        let isVerified
        isVerified = await verify(token, otp, repo)

        console.log(isVerified);

        if (isVerified) {
            console.log("verification email");
            res.status(200).json(
                new ApiResponse(200, "otp verification successfully")
            );
        } else {
            res.status(400).json(
                new ApiResponse(400, "otp verification failed")
            );
        }

    }
)

//after successfull verification you will be ca login on


const hasAccess = asyncHandler(async (req, res) => {
    console.log("request ha saccess")
    const token = req.cookies?.accessToken;


    if (!token) {
        console.log("no token")
        // throw new ApiError(400, "Token not found.");
        return res.status(200).json(
            new ApiError(401, "No token provided")
        )
    }
    console.log("Token received:", token);

    let decodedToken;
    try {
        decodedToken = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
    } catch (err) {
        console.error("JWT verification failed:", err);
        throw new ApiError(401, "Invalid or expired authentication token.");
    }

    if (!decodedToken) {
        throw new ApiError(401, "Token verification failed.");
    }

    const id = decodedToken.id;
    const user = await UserModel.findById(id);

    if (!user) {
        console.error("User not found for ID:", id);
        throw new ApiError(404, "User not found.");
    }

    console.log("User found:", user);

    // Respond with success
    res.status(200).json(
        new ApiResponse(200, user, "User found successfully and has full access.")
    );
});


const signin = asyncHandler(async (req, res) => {
    const {email, password} = req.body;

    console.log("Login Request:", email, password);

    const {accessToken, refreshToken} = await loginUser(repo, email, password);

    if (!accessToken || !refreshToken) {
        throw new ApiError(401, "Unable to generate tokens");
    }

    const cookieOptions = {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "Lax",
        maxAge: 24 * 60 * 60 * 1000 // 1 day
    };

    return res
        .status(200)
        .cookie("accessToken", accessToken, cookieOptions)
        .cookie("refreshToken", refreshToken, cookieOptions)
        .clearCookie("token")
        .json(new ApiResponse(200, "User logged in successfully"));
});


const logout = asyncHandler(
    async (req, res) => {
        res.status(200)
            .clearCookie("accessToken")
            .clearCookie("refreshToken")
            .json(new ApiResponse(200, "user logout successfully"));
    }
)

export {hasAccess, signin, signup, verifyUser, logout}