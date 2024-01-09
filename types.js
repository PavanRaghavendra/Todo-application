const zod=require("zod");
/*
  {
    title:String,
    description:string,
  }
  {
    id:string,
  }
*/
const createTodo=zod.object({
    title: zod.string().min(1),
    description:zod.string().min(2)
}
)

const updateTodo=zod.object({
    id:zod.string()
})
module.exports={
    createTodo: createTodo,
    updateTodo: updateTodo
}