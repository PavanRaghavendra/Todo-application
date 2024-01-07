
const {user}=require("./db");
async function UserMiddleware(req,res,next)
{
    const UserName=req.body.UserName;
    const Password=req.body.Password;
    const User=await user.findOnde(
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
        res.status(404).send("User desn't exist..sign in and enjoy.");
    }
}
module.exports={
    UserMiddleware
}