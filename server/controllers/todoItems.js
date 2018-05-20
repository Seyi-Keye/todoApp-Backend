const TodoItem = require("../models").TodoItem;

module.exports = {
  createTodoItem(req, res) {
    return TodoItem.create({
      content: req.body.content,
      todoId: req.params.todoId,
    })
    .then(todoItem => res.status(201).send({"message": "TodoItem created",
  data: todoItem}))
    .catch(err => res.status(400).send(err))
  }
};