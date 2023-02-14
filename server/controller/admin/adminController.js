const jwt = require("jsonwebtoken")
const userModel = require('../../models/userModel')
const maxAge = 3*34*60*60
const createToken = (id)=>{
    return jwt.sign({id},"HELLOADMIN",{
        expiresIn:maxAge,
    })
}
exports.Admin_login = async(req,res)=>{
    try {
        const{email,password} = req.body
        const Email = "admin@gmail.com";
        const Pass = "1111";
        if(email===Email&&password===Pass){
            const token = createToken(email);

            res.cookie("jwt",token,{
                withCrdentials : true,
                httpOnly:false,
                maxAge: maxAge * 1000,
            })
            res.status(201).json({user:email,created:true})
        }else{
            res.json({message:"password not matching" , status:false})
        }
        
    } catch (error) {
        console.log(error);
    }
}

exports.admin_Home = async(req,res)=>{
    try {
        const userData = await userModel.find()
        res.json({action:true , userData})
    } catch (error) {
      console.log(error);  
    }
}