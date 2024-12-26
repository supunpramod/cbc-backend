import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';


import User from './models/user.js';
import userRouter from './routes/userRouter.js';
import jwt from "jsonwebtoken";
import dotenv, { configDotenv } from "dotenv";
dotenv.config();

const app = express();
const mongourl=process.env.MONGO_DB_URI

mongoose.connect(mongourl,{})

const connection = mongoose.connection;

connection.once("open",()=>{
    console.log("Database connected");
})

app.use(bodyParser.json())

app.use(
    (req,res,next)=>{
        const token= req.header("Authorization")?.replace("Bearer","")
        console.log(token)
        if(token!=null){
            jwt.verify(token,process.env,SECRET,(error,decoded)=>{
                if(!error){
                    console.log(decoded)
                    req.user=decoded
                }

            })
        }
        next()
         
    }
)



app.use("/api/users",userRouter)

app.listen(
    3000,
    ()=>{
        console.log('server is running on port 3000');
    }
)

