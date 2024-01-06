/*
Todo
{
    titel:string,
    description:string,
    completed:boolean
}
*/
const mongoose=require("mongoose");
const { string } = require("zod");
//mongo url connect.
mongoose.connect("mongodb+srv://johnwick:oJ4g7oElkNQYlg3a@cluster0.keix9jl.mongodb.net/todos");


const TodoSchema=mongoose.Schema({
    title:String,
    description:String,
    completed:Boolean
})

const todo=mongoose.model('todos',TodoSchema);
module.exports={
    todo
}
