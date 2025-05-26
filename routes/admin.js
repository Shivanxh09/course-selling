const { Router } = require("express");
const adminRouter = Router();
const {adminModel, courseModel} = require("../db.js");
const jwt = require("jsonwebtoken");
const {JWT_ADMIN_PASSWORD} = require("../config.js");
//bcrpyt zod ...
const { adminMiddleware } = require("../middleware/adminauth.js");


adminRouter.post("/signup", async function(req,res){
  const {email,password, firstname, lastname }= req.body;//late add zod validation
  //TODO: hash the password so plaintext pw is not string

  //TODO: Put inside a try catch block

await adminModel.create({
  email: email,
  password: password,
  firstname: firstname,
  lastname: lastname
})
 
  res.json({
    message: " signup succed"
  })
})
adminRouter.post("/signin",async function(req,res){
 const {email,password} = req.body;
  const admin = await adminModel.findOne({
    email: email,
    password: password
  });
  if(admin){
    
    const token = jwt.sign({
      id: admin._id
    },JWT_ADMIN_PASSWORD);
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
adminRouter.post("/course",adminMiddleware, async function(req,res){
  const adminId = req.userId;
  const { title,description, imageUrl,price } = req.body;
 const course = await courseModel.create({
    title:title,
    description:description,
    imageUrl:imageUrl,
    price:price,
    creatorId: adminId
  })
  res.json({
    message: "course created",
    courseId: course._id
  })
})
adminRouter.put("/course",adminMiddleware,async function(req,res){
  const adminId = req.userId;
 const { title,description, imageUrl,price , courseId } = req.body;

 const course = await courseModel.updateOne({
    _id: courseId, 
        creatorId: adminId 
 },{
     title: title, 
        description: description, 
        imageUrl: imageUrl, 
        price: price
 })

  res.json({
    message: "changes done",
    courseId: course._id
  })
})
adminRouter.get("/course/bulk", adminMiddleware,async function(req, res) {
    const adminId = req.userId;

    const courses = await courseModel.find({
        creatorId: adminId 
    });

    res.json({
        message: "Course updated",
        courses
    })
})

module.exports ={
 adminRouter
}