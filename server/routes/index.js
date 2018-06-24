import { Router } from "express";
import TodosController from "../controllers/TodoController";
import TodoItemsController from "../controllers/TodoItemsController";

const router = Router();

  router.route("/api/v1/todos")
  .get(TodosController.getAllTodos)
  .post(TodosController.createTodo);

  router.route("/api/v1/todos/:id")
  .get(TodosController.findATodo)
  .put(TodosController.updateATodo)
  .delete(TodosController.deleteATodo);

  router.route("/api/v1/todos/:todoId/todoItems")
  .post(TodoItemsController.createTodoItem)
  .get(TodoItemsController.getAllTodoItems);

  router.route("/api/v1/todos/:todoId/todoItems/:todoItemId")
  .delete(TodoItemsController.deleteATodoItem)
  .put(TodoItemsController.updateATodoItem)
  .get(TodoItemsController.getATodoItem);

export default router;
