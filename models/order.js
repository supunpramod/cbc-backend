import mongoose from "mongoose";
const orderSchema=mongoose.Schema({
    orderId:{
        type:String,
        required:true,
        unique:true
    },
    email:{
        type:String,
        required:true
    },
    orderedItems:[
        {
            name:{
            type:String,
            required:true
        },
        price:{
            type:Number,
            required:true
        },
        quantity:{
            type:Number,
            required:true
        },
        image:{
            type:String,
            required : true

        }
    }
    ]
 
    }
)