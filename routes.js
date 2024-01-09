const {Router}=require("express");
const express=require("express");
const { user } = require("./db");
const jwt=require("jsonwebtoken");
const { UserMiddleware } = require("./middleware");
const router=Router();
const app=express();
const cors=require("cors");
app.use(cors());
const secretkey="12345"
router.post('/signup',async (req,res)=>
{
    const {UserName,Password}=req.body;
    const userExsits=await user.findOne({UserName});
    if(userExsits)
    {
        return res.status(404).json({msg:"username already in use"});
    }
    await user.create({UserName,Password});
    return res.status(200).json({msg:"User Created Sucessfully"});
})
router.post("/signin",(req,res)=>
{
    const {userName,Password}=req.body;
    const userExsists=user.findOne({userName});
    if(!userExsists||userExsists.Password!=Password)
    {
        return res.status(404).send("Worng username/password");
    }
    const token=jwt.sign({UserName},secretkey);
    return res.status(200).json({token});
})
module.exports=router