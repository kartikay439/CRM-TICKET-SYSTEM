import {asyncHandler} from "../../../utils/AsyncHandler.js";
import ApiResponse from "../../../utils/ApiResponse.js";
import registerUser from "../../../application/useCases/user.usecase/RegisterUser.js";
import loginUser from "../../../application/useCases/user.usecase/LoginUser.js";
import userRepositoryImplementation from "../../../infrastructure/repositories/UserRepositoryImplementation.js";
import {sendVerificationEmail} from "../../../utils/Email.js";
import apiResponse from "../../../utils/ApiResponse.js";
import ApiError from "../../../utils/ApiError.js";
import jwt from "jsonwebtoken";
import verify from "../../../application/useCases/user.usecase/VerifyUser.js";
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


        const otp = Math.ceil(1000+Math.random()*9000);

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



const hasAccess = asyncHandler(
    async (req, res) => {
        const token = req.cookies?.accessToken;
        console.log("token", token);
        let decodedToken;
        if(!token) {
            throw new ApiError(400,"token not found.");
        }
        try {
            decodedToken = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);

        }catch(err){
            console.log(err);
        }
        console.log(decodedToken);
        if(!decodedToken) {
            throw new ApiError(400,"token not found.");
        }
        const id = decodedToken.id;
        const user = await UserModel.findById(id);
        console.log(user);
        if(!user) {
            throw new ApiError(400,"user not found.");
        }
        res.status(200).json(
            new ApiResponse(200,user,"user found successfully and have full access to the content")
          );
    }
)


const signin= asyncHandler(
    async (req, res) => {
        console.log(req.body);
        const email = req.body.email;
        const password = req.body.password;


        console.log(email, password);
        const {accessToken, refreshToken} = await loginUser(repo, email, password)
        console.log(accessToken);
        if (!accessToken) {
            throw new ApiError("unable to generate access token");
        }


        res.status(200)
            .cookie("accessToken", accessToken, options)
            .cookie("refreshToken", refreshToken, options)
            .json(new ApiResponse(200, "user login successfully")
        )
    }
)
export {hasAccess,signin,signup,verifyUser}