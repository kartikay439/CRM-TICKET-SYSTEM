import ApiError from "./ApiError.js";
import ApiResponse from "./ApiResponse.js";

const errorHandler = (err,req,res,next)=>{
    if(err instanceof ApiError){
        return res.status(200).json(
            new ApiResponse(
                err.statusCode,
                err.message,
            )
        )
    }

    return res.status(500).json(
        new ApiResponse(
            500,
            "Internal Server Error hai"
        )
    )




}

export default errorHandler;