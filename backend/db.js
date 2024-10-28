
// mongodb+srv://waghmare247aniketh:seuB75hxD5EmWgjd@cluster0.zuglw.mongodb.net/todos
const mongoose = require("mongoose");
const { boolean } = require("zod");

// .env
mongoose.connect("mongodb://localhost:27017/todos")

const todoSchema = mongoose.Schema({
    title: String,
    description: String,
    Completed: Boolean
})

const todo = mongoose.model('todo', todoSchema);

module.exports ={
    todo
}