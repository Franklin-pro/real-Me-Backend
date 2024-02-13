import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import dotenv from "dotenv"
import router from "./router/index.js";


const app = express()

dotenv.config()

app.use(bodyParser.json())
app.use("/api/v1",router)

const port = process.env.PORT
const database = process.env.DATABASE

//CONFIG PORT   

app.listen(port,()=>{
    console.log(`server running on ${port}`)
})
mongoose.connect(database).then(()=>{
    console.log(`database connected successfully`)
}).catch((error)=>{
    console.log(error)
})

export default app