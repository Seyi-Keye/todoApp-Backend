const todosController = require('../controllers').todo;
const todoItemsController = require('../controllers').todoItem;

module.exports = (app) => {
  app.get('/api', (req, res) => res.status(200).send({
    message: 'Welcome to the Todos API!',
  }));

  app.post('/api/todos', todosController.createTodo);
  app.get('/api/todos', todosController.getAllTodos);

  app.get('/api/todos/:id', todosController.findATodo);
  app.put('/api/todos/:id', todosController.updateATodo);

  app.post('/api/:todoId/todoItem', todoItemsController.createTodoItem);
  // app.get('/api/todoItem', todoItemsController.getAllTodos);

  // app.get('/api/todoItem/:id', todoItemsController.findATodo);
  // app.put('/api/todoItem/:id', todoItemsController.updateATodo);

};