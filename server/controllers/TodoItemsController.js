import TodoItem from "../models";

const TodoItemController = {
  createTodoItem(req, res) {
    return TodoItem.create({
      content: req.body.content,
      todoId: req.params.todoId
    })
    .then(todoItem => res.status(201).send({message: "TodoItem created",
  data: todoItem}))
    .catch(err => res.status(400).send(err));
  },

  getAllTodoItems(req, res) {
    return TodoItem
    .findAll()
    .then(todoItems => res.status(200).send(todoItems))
    .catch(err => res.status(500).send(err));
  },

  updateATodoItem(req, res) {
    return TodoItem
      .find({
          where: {
            id: req.params.todoItemId,
            todoId: req.params.todoId
          }
        })
      .then(todoItem => {
        if (!todoItem) {
          return res.status(404).send({
            message: "TodoItem Not Found"
          });
        }

        return todoItem
          .update({
            content: req.body.content || todoItem.content,
            complete: req.body.complete || todoItem.complete
          })
          .then(updatedTodoItem => res.status(200).send(updatedTodoItem))
          .catch(error => res.status(400).send(error));
      })
      .catch(error => res.status(400).send(error));
  },

  deleteATodoItem(req, res) {
    return TodoItem
      .find({
          where: {
            id: req.params.todoItemId,
            todoId: req.params.todoId
          }
        })
      .then(todoItem => {
        if (!todoItem) {
          return res.status(404).send({
            message: "TodoItem Not Found"
          });
        }

        return todoItem
          .destroy()
          .then(() => res.status(204).send())
          .catch(error => res.status(400).send(error));
      })
      .catch(error => res.status(400).send(error));
  }
};

export default TodoItemController;
