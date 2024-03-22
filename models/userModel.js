const mongoose=require("mongoose");

const userSchema=new mongoose.Schema({
    name:{
        type:String,
        required:[true,"name property is must"],
        unique:true
    },
    address:{
        type:String,
        required:[true,"address property is must"],

    },
    profession:{
        type:String,
        required:[true,"profession property is must"]
    },
    age:{
        type:Number
    },
    phone:{
        type:Number,
        required:true,
        pattern: "^[0-9]{10}$",
        description: "Must be a 10-digit phone number"
    }
})

const User=mongoose.model('users',userSchema);

module.exports=User;