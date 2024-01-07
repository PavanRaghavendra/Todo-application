/*
Todo
{
    titel:string,
    description:string,
    completed:boolean
}
*/
const mongoose=require("mongoose");
//mongo url connect.
mongoose.connect("mongodb+srv://johnwick:oJ4g7oElkNQYlg3a@cluster0.keix9jl.mongodb.net/todos");

const UserSchema= new mongoose.Schema({
    UserName:String,
    Password:String
})
const TodoSchema= new mongoose.Schema({
    title:String,
    description:String,
    completed:Boolean
})

const todo=mongoose.model('todos',TodoSchema);
const user=mongoose.model('user',UserSchema);
module.exports={
    todo,
    user
}
