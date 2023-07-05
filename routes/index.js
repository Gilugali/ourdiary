
 const colors = ['red', 'blue', 'purple', 'orange']

const router = require("express").Router()
const Todo = require("../models/Todo");

// routes will be here....
router.get("/", async(req, res) => {
    const allTodo = await Todo.find();
    res.render("index", {todo: allTodo})
})


module.exports = router;