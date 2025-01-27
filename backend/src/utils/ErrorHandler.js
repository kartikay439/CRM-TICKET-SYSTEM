import ApiError from "./ApiError.js";
import ApiResponse from "./ApiResponse.js";

const errorHandler = (err,req,res,next)=>{
    if(err instanceof ApiError){
        return res.status(err.status).json(
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