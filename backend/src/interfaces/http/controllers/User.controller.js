import {asyncHandler} from "../../../utils/AsyncHandler.js";
import ApiResponse from "../../../utils/ApiResponse.js";
import registerUser from "../../../application/useCases/user.usecase/RegisterUser.js";
import userRepositoryImplementation from "../../../infrastructure/repositories/UserRepositoryImplementation.js";

const repo = new userRepositoryImplementation()

const register = asyncHandler(
    async (req, res,{registerUseCase,userRepository}) => {
        //testing purpose
        const { email,full_name,password } = req.body;
        console.log(registerUseCase);

        const user = await registerUser(repo,{
            email,
            full_name,
            password,
        })

        if(!user){
            throw new ApiError("registration unsuccessfully");
        }

        res.status(200).json(
            new ApiResponse(
                200,
                user,
                "User registered successfully"

            )
        )

    }
)
export {register}