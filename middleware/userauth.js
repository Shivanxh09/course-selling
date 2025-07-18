const jwt = require("jsonwebtoken");

const {JWT_USER_PASSWORD} = require("../config.js");

function userMiddleware(req,res,next){
  const token = req.headers.token;
  const decoded = jwt.verify(token, JWT_USER_PASSWORD);

  

  if(decoded){
    req.userId = decoded.id;
    next()
  }
  else{
    res.status(404).json({
      message: " invalid credentials"
    })
  }

}
module.exports ={
  userMiddleware
 
}