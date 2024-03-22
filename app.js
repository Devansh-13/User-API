const express=require("express");
const morgan=require("morgan");
const userRouter=require("./routes/userRoute.js")

const app=express();

//middlewares

app.use(express.json()); //parse request body as json
app.use(morgan('dev'));
app.use((req,res,next)=>{
    res.append("Server-Time",new Date().toISOString());
    next();
})
app.use("/api/v1/users",userRouter);

module.exports=app;