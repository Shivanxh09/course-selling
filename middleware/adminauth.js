const jwt = require("jsonwebtoken");

const {JWT_ADMIN_PASSWORD} = require("../config.js");

function adminMiddleware(req,res,next){
  const token = req.headers.token;
  const decoded = jwt.verify(token, JWT_ADMIN_PASSWORD);

  

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
  adminMiddleware
 
}