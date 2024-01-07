const {Router}=require("express");
const express=require("express");
const punycode = require('punycode/');
const { createTodo, updateTodo } = require("./types");
const cors=require("cors");
const { todo } = require("./db");
const router=Router();
const app=express();
app.use(express.json());
app.use(cors());
router.post("/todo",async (req,res)=>
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
router.get("/todos",async (req,res)=>
{
    const todos= await todo.find({});
    res.json(
        {
            todos
        }
    )
});
router.get("/completed",async (req,res)=>
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
module.exports=router