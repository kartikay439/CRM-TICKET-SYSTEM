const asyncHandler = (requestHandler)=>{
    return (req,res,next,dependencies)=>{
        Promise.resolve(requestHandler(req,res,next,{...dependencies}))
            .catch((err)=>{
                next(err);
            })
    }
}
export {asyncHandler};