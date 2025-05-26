require('dotenv').config();

const express = require('express')
const mongoose = require('mongoose');
const {userRouter} = require("./routes/user.js");
const {courseRouter} = require("./routes/course.js")
const { adminRouter } = require("./routes/admin.js");


const app = express();
app.use(express.json()); // Add this line before your routes


app.use("/api/v1/user",userRouter);
app.use("/api/v1/course",courseRouter);
app.use("/api/v1/admin",adminRouter);
async function main() {
    
   await mongoose.connect(process.env.MONGO_URL);
    app.listen(3006);
    console.log("listening on port 3006")
}
main()

