const asyncHandler = (requestHandler)=>{
    return (req,res,next,dependencies)=>{
        Promise.resolve(requestHandler(req,res,next,{...dependencies}))
            .catch((err)=>{
                console.log(err);
                // next(err);
            })
    }
}
export {asyncHandler};