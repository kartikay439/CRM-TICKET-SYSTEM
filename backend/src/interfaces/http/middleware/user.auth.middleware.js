import {asyncHandler} from "../../../utils/AsyncHandler.js";
import ApiError from "../../../utils/ApiError.js";

const ifUserHaveAccessToken = asyncHandler(
    async (req,res,next) =>{
        const accessToken = req.cookies?.accessToken;
        if (!accessToken) {
            throw new ApiError(403, "Access token not found.");
        }
        //2 options if have access tokens got to content
        //if dont have open login page
        //on 403 ui will open login page// XXXXXXXX



    }
)