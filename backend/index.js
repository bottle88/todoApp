const express = require('express');
// Basic express boilerplate code
// with express.json() middleware
const { createTodo, updateTodo } = require('./types');
const {todo} = require('./db')
const cors = require("cors");
const app = express();


// middlware
app.use(express.json())
app.use(cors())

// body {
    // title: String,
    // description: string
    // }
    
    // Create a todo
// console.log(todo)


app.post("/todo", async function(req,res){
    const createPayload = req.body
    const response = createTodo.safeParse(createPayload);

    if (!response.success){
        res.status(411).json({
            msg: "You sent the wrong inputs"
        })
        return;
    }
    // put in mongoDB
    await todo.create({
        title: createPayload.title,
        description: createPayload.description,
        completed: false
    })

    res.json({
        msg: "Todo Created"
    })
    
})

// Get to do's
app.get("/todos", async function(req,res){
    // Get things from mongoDB
    const todos = await todo.find({});
    // console.log(todos)

    res.json({
        todos
    })
})


// Mark to do as Done!
app.put("/completed", async function(req,res){
    const updatePayload = req.body;
    const response = updateTodo.safeParse(updatePayload);
    if(!response.success){
        res.status(411).json({
            msg: "You sent the wrong inputs"
        })
        return;
    }
    // Update to mongoDB
    await todo.updateOne({
        _id: req.body.id
    },{
            completed: true
      }
    )

    res.json({
        msg: "Todo marked as succesful"
    })
})



PORT = 3000
app.listen(PORT, ()=>{
    console.log(`Server is running at ${PORT}`)
})