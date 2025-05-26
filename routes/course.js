const{ Router} = require('express');

const courseRouter = Router();

courseRouter.post("/purchase",function(req,res){
  res.json({
    message:"course end point"
  })
})
courseRouter.get("/preview",function(req,res){
  res.json({
    message: " preview endpoint"
})
})

module.exports = {
 courseRouter
}