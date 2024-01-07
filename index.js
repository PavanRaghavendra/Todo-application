const express=require("express");
const app=express();
const bodyParser=require('body-parser');
const userRouter=require("./routes");
const todoRouter=require("./todos");
app.use(express.json());
app.use(cors());

//body{
    //title:String,
    //description:String,
//}
app.use(bodyParser.json());
app.use("/user",userRouter);
app.use("/todolist",todoRouter);
app.listen(port);
