const Todo = require("../models").Todo;

module.exports = {
  createTodo(req, res) {
    return Todo
    .create({
       title: req.body.title
      })
    .then(todo => res.status(201).send(todo))
    .catch(err => res.status(500).send(err));
  },

  getAllTodos(req, res) {
    return Todo
    .findAll()
    .then(todo => res.status(200).send(todo))
    .catch(err => res.status(500).send(err));
  },

  findATodo(req, res) {
    return Todo
    .findOne({ where: {id: req.params.id} })
    .then(todo => {
      if(!todo) {
        res.status(404).send("Not found");
      } else {
        res.status(200).send(todo);
      }})
    .catch(err => {
      res.status(500).send(err)});
  },

  updateATodo(req, res) {
    return Todo
    .findOne({ where: {id: req.params.id} })
    .then(todo => {
      if(!todo) {
        res.status(404).send("Not found");
      } else {
        const newTodo = {
          title: req.body.title
        }
        return todo.update(newTodo)
        .then(() => res.status(200).send(todo))
        .catch((error) => res.status(400).send(error));
      }})
    .catch(err => {
      res.status(500).send(err)});
  },
}