const app=require("./app.js")
const mongoose=require("mongoose");

const DATABASE="mongodb+srv://devansh12_02:<PASSWORD>@cluster0.ylso8me.mongodb.net/<NAME>?retryWrites=true&w=majority&appName=Cluster0";

const COLL_NAME="Test1";
const PASSWORD="chichore123"; 

const DB_URL=DATABASE.replace("<PASSWORD>",PASSWORD).replace("<NAME>",COLL_NAME);

mongoose.connect(DB_URL)
    .then((res)=>{
    console.log("-------------DATABASE CONNECTED------------")
    })
    .catch((err)=>{
        console.log("ERROR:",err);
    })



const PORT=1400

app.listen(PORT,()=>{
    console.log("----------Server Created----------");
})
