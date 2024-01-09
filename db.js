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
mongoose.connect("");

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
