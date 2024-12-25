import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';

import studentRouter from './routes/studentRouter.js';
import productRouter from './routes/productRouter.js';
import User from './models/user.js';
import userRouter from './routes/userRouter.js';
import jwt from "jsonwebtoken";

const app = express();
const mongourl="mongodb+srv://admin2:1234@cluster0.8yttb.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"

mongoose.connect(mongourl,{})

const connection = mongoose.connection;

connection.once("open",()=>{
    console.log("Database connected");
})

app.use(bodyParser.json())

app.use(
    (req,res,next)=>{
        console.log(req.header("Authorization"))?.replace("Bearer","")
        console.log(token)
        if(token!=null){
            jwt.verify(token,"cbc-secret-key-7973",(error,decoded)=>{
                if(!error){
                    console.log(decoded)
                    req.user=decoded
                }

            })
        }
        next()
         
    }
)


app.use("/api/students",studentRouter)
app.use("/api/products",productRouter)
app.use("/api/users",userRouter)

app.listen(
    3000,
    ()=>{
        console.log('server is running on port 5000');
    }
)

