const express = require('express');
const app = express();
const cors = require("cors");
app.use(express.json());
const AuthRoutes = require('./routes/userRouter/router')
const cookieParser = require('cookie-parser')

require('./config/db')
app.use(express.urlencoded({ extended: false }))

// app.use(cors())
app.use(cors({
    origin:["http://localhost:3000"],
    method : ["GET","POST"],
    credentials: true,
}));

app.use(cookieParser())
app.use('/',AuthRoutes)

//file path
var publicDir = require('path').join(__dirname,'public'); 
// console.log(publicDir);
app.use(express.static(publicDir)); 

app.listen(2000 , ()=>{
    console.log('server runing!!!!');
    console.log('http://localhost:2000');
})