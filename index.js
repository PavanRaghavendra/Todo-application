const express=require("express");
const punycode = require('punycode');
const { createTodo, updateTodo } = require("./types");
const { todo } = require("./db");
const app=express();
app.use(express.json());
//body{
    //title:String,
    //description:String,
//}
app.get("/signup",(req,res)=>
{

});
app.post("/signin",(req,res)=>
{

});
app.post("/todo",async (req,res)=>
{
    const Createpayload=req.body;
    const parsedpayload=createTodo.safeParse(Createpayload);
    if(!parsedpayload.success)
    {
        res.status(404).json(
            {
                msg:"you sent the wrong inputs",
            }
        )
    }
   await todo.create(
        {
            title:Createpayload.title,
            description:Createpayload.description,
            completed:false,
        }
    )
    res.json(
        {
            msg:'Todo created'
        }
    )
});
app.get("/todos",async (req,res)=>
{
    const todos= await todo.find({});
    res.json(
        {
            todos
        }
    )
});
app.get("/completed",async (req,res)=>
{
    const updatepayload=req.body;
    const parsepayload=updateTodo.safeParse(updatepayload);
    if(!parsepayload.success)
    {
        res.status(404).send(
            {
                msg:"you send a wrong input!.."
            }
        )
        return;
    }
    await todo.update(
    {
        _id:req.body.id
    },
    {
        completed:true
    }
    )
    res.json(
        {
            msg:"todo mark as completed"
        }
    )
});
app.listen(3008);