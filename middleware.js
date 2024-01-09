
const {user}=require("./db");
async function UserMiddleware(req,res,next)
{
    const UserName=req.body.UserName;
    const Password=req.body.Password;
    const User=await user.findOne(
        {
            UserName:UserName,
            Password:Password
        }
    );
    if(User)
    {
        next();
    }
    else{
        res.status(404).send("User desn't exist..sign up and enjoy.");
    }
}
module.exports={
    UserMiddleware
}