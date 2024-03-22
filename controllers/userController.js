const User=require("../models/userModel.js");

module.exports.getUsers=async (req,res)=>{
    const {_id,...body}=req.body;
    
    try{
        const newUser=await User.find();
        
        res.status(200);
        res.send({
            status:"success",
            body:{
                users:newUser
            }
        })

    }
    catch(err){
        res.status(500);
        res.json({
            status:"fail",
            message:err.message
        })
    }
}


module.exports.createUser=async (req,res)=>{
    const {_id,...body}=req.body;
    try{
        const newUser=await User.create(body);
        res.status(201);
        res.send({
            status:"success",
            body:{
                users:newUser
            }
        })

    }
    catch(err){
        res.status(405);
        res.json({
            status:"fail",
            message:err.message
        })
    }
}

module.exports.getUser=async (req,res)=>{
    const {_id,...body}=req.body;
    const paramId=req.params.id;
    try{
        const newUser=await User.findOne({
            "_id":paramId
        });
        if(!newUser) throw new Error("Invalid request");
        res.status(200);
        res.send({
            status:"success",
            body:{
                users:newUser
            }
        })

    }
    catch(err){
        res.status(404);
        res.json({
            status:"fail",
            message:err.message
        })
    }

}
module.exports.updateUser=async(req,res)=>{
    const {_id,...body}=req.body;
    const paramId=req.params.id;
    try{
        const newUser=await User.findOneAndUpdate({
            "_id":paramId},body,{new:true}
        );
        if(!newUser) throw new Error("Invalid request");
        res.status(201);
        res.send({
            status:"success",
            body:{
                users:newUser
            }
        })

    }
    catch(err){
        res.status(404);
        res.json({
            status:"fail",
            message:err.message
        })
    }
}
module.exports.deleteUser=async(req,res)=>{
    const {_id,...body}=req.body;
    const paramId=req.params.id;
    try{
        const newUser=await User.findOneAndDelete({
            "_id":paramId
        });
        if(!newUser) throw new Error("Invalid request");
        res.status(204);
        res.send({
            status:"success",
            body:{
                users:newUser
            }
        })

    }
    catch(err){
        res.status(404);
        res.json({
            status:"fail",
            message:err.message
        })
    }
}
module.exports.replaceUser=async(req,res)=>{
    const {_id,...body}=req.body;
    const paramId=req.params.id;
    try{
        const newUser=await User.findOneAndReplace({
            "_id":paramId},body,{new:true}
        );
        if(!newUser) throw new Error("Invalid request");
        res.status(201);
        res.send({
            status:"success",
            body:{
                users:newUser
            }
        })

    }
    catch(err){
        res.status(404);
        res.json({
            status:"fail",
            message:err.message
        })
    }
}