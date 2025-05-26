const { Router } = require('express');
const { userModel } = require('../db.js');
const jwt = require("jsonwebtoken");
const {JWT_USER_PASSWORD} = require("../config.js");


const userRouter = Router();


userRouter.post("/signup", async function(req,res){
  const {email,password, firstname, lastname }= req.body;//late add zod validation
  //TODO: hash the password so plaintext pw is not string

  //TODO: Put inside a try catch block

await userModel.create({
  email: email,
  password: password,
  firstname: firstname,
  lastname: lastname
})
  res.json({
    message: " signup succeeded"
  })
})

userRouter.post("/signin",async function(req,res){
  const {email,password} = req.body;
  const user = await userModel.findOne({
    email: email,
    password: password
  });
  if(user){
    
    const token = jwt.sign({
      id: user._id
    },JWT_USER_PASSWORD);
    res.json({
      token: token
    })
  }
  else{
  res.status(403).json({
    message: "signin failed put correct inormation"
  })
  }
})
userRouter.get("/purchases",function (req,res) {
  res.json({
    message:"purchase endpoint user"
  })
  
})
module.exports ={
   userRouter
}