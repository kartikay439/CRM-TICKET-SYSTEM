import {asyncHandler} from "../../../utils/AsyncHandler.js";
import ApiResponse from "../../../utils/ApiResponse.js";
import registerUser from "../../../application/useCases/user.usecase/RegisterUser.js";
import loginUser from "../../../application/useCases/user.usecase/LoginUser.js";
import userRepositoryImplementation from "../../../infrastructure/repositories/UserRepositoryImplementation.js";
import {sendVerificationEmail} from "../../../utils/Email.js";
import apiResponse from "../../../utils/ApiResponse.js";
import ApiError from "../../../utils/ApiError.js";

const repo = new userRepositoryImplementation()

const options = {
    httpOnly: true,
    secure: true,
}

const register = asyncHandler(
    async (req, res, {registerUseCase, userRepository}) => {
        //testing purpose
        const {email, name, password} = req.body;
        // console.log(registerUseCase);

        const user = await registerUser(repo, {
            email,
            name,
            password,
        })

        console.log(user);

        if (!user) {
            throw new ApiError("registration unsuccessfully");
        }

        const otp = 5439;

        const isSend = await sendVerificationEmail(email,otp)
        if (!isSend) {
            console.log("code not send")
        }

        // here token will go
        //tke will contain id

        res.status(200).cookie("otp", otp, options).cookie("email", user.email)
            .json(
                new ApiResponse(
                    200,
                    user,
                    "User registered successfully"
                )
            )

    }
)

const varifyUser = asyncHandler(
    async (req, res) => {
        const otpA = req.body.otp;
        const otpB = req.cookies?.otp;
        const email  = req.cookies?.email;
        const user = await repo.findByEmail(email)

        if (otpA === otpB) {
            user.isVerified = true;
            await user.save({validateBeforeSave: true})
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


const loginUserC = asyncHandler(
    async (req, res) => {
        console.log(req.body);
        const email = req.body.email;
        const password = req.body.password;
        console.log(email, password);
        const accessToken = await loginUser(repo, email, password)
        console.log(accessToken);
        if (!accessToken) {
            throw new ApiError("unable to generate access token");
        }


        res.status(200).cookies("accessToken", accessToken, options).json(
            new ApiResponse(200, "user login successfully")
        )
    }
)
export {register, loginUserC, varifyUser}