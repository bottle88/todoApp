// Zod implementation for input validation
const zod = require("zod");

const createTodo = zod.object({
    title: zod.string(),
    description: zod.string()
})

const updateTodo = zod.object({
    id: zod.string()
})


/*
    {
        title: String,
        description: string
    }

    {
        id: string
    }
*/
module.exports = {
    createTodo: createTodo,
    updateTodo: updateTodo
}