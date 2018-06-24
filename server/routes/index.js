import { Router } from "express";
import TodosController from "../controllers/TodoController";
import TodoItemsController from "../controllers/TodoItemsController";
import UserController from "../controllers/UserController";

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

  // user routes
  router.route("/api/v1/users")
  .post(UserController.createUser)
  .get(UserController.getAllUsers);

  router.route("/api/v1/users/:userId")
  .get(UserController.getAUser)
  .delete(UserController.softDeleteUser);

  router.route("/api/v1/login")
  .post(UserController.userLogin);


export default router;
