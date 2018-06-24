import {Todo, TodoItem} from "../models";

const TodoController = {
  createTodo(req, res) {
    return Todo
    .create({
       title: req.body.title,
       userId: req.decoded.userId
      })
    .then(todo => res.status(201).send(todo))
    .catch(err => res.status(500).send(err));
  },

  getAllTodos(req, res) {
    return Todo
    .findAll({
      where: {
        userId: req.decoded.userId
      },
        include: [{
          model: TodoItem,
          as: "todoItems"
        }]
    })
    .then(todo => res.status(200).send(todo))
    .catch(err =>
      res.status(500).send(err));
  },

  findATodo(req, res) {
    return Todo
    .findById(req.params.id)
    .then(todo => {
      if(!todo) {
        return res.status(404).send({ message: "Not found"});
      }
        return res.status(200).send(todo);
      })
    .catch(err =>
      res.status(500).send(err));
  },

  updateATodo(req, res) {
    return Todo
    .findById(req.params.id)
    .then(todo => {
      if(!todo) {
        return res.status(404).send({ message: "Not found"});
      }
        const newTodo = {
          title: req.body.title
        };
        return todo.update(newTodo)
        .then(() => res.status(200).send(todo))
        .catch((error) => res.status(400).send(error));
      })
    .catch(err =>
      res.status(500).send(err));
  },

  deleteATodo(req, res) {
    return Todo
    .findById(req.params.id)
    .then(todo =>{
      if(!todo) {
        return res.status(404).send({ message: "Todo not found" });
      }
        return todo.destroy()
        .then(() => res.status(200).send({message: "Todo deleted"}))
        .catch(err => res.status(500).send(err));
    })
    .catch(err => res.status(500).send(err));
  }
};

export default TodoController;
