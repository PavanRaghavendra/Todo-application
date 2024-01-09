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
router.get("/completed", async (req, res) => {
    const updatePayload = req.body;
    const parsePayload = updateTodo.safeParse(updatePayload);
    if (!parsePayload.success) {
        res.status(404).send({
            msg: "You sent a wrong input!.."
        });
        return;
    }
    const todoId = req.body.id;
        await todo.updateOne({ _id: todoId }, { completed: true });

        res.json({
            msg: "Todo marked as completed"
        });
});
module.exports=router