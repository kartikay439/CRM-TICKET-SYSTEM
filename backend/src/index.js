import dotenv from "dotenv"
import connectDB from "./infrastructure/config/db.js";
import app from "./application/app.js";

dotenv.config({
    path:'./env'
}
)

connectDB().then(
    ()=>{
        app.listen(process.env.PORT, () => {
                console.log(`Server is running at ${process.env.PORT}`);

        }
        )
        app.on("error",(error)=>{
            console.log("Error ",error)
        })

    }
).catch(
    err => {
        console.log("connection failed to mongo db"+err)
    }
)
