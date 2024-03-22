const express=require("express");
const userController=require("../controllers/userController.js");

const userRouter=express.Router();

userRouter
    .route('/')
    .get(userController.getUsers)
    .post(userController.createUser);

userRouter
    .route("/:id")
    .get(userController.getUser)
    .patch(userController.updateUser)
    .put(userController.replaceUser)
    .delete(userController.deleteUser);

module.exports=userRouter;