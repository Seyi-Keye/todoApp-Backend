import { Router } from "express";
import TodosController from "../controllers/TodoController";
import TodoItemsController from "../controllers/TodoItemsController";
import UserController from "../controllers/UserController";
import Middleware from "../middleware/middleware";

const router = Router();

  // todos routes
  router.route("/api/v1/todos")
  .get(Middleware.decodeToken, TodosController.getAllTodos)
  .post(Middleware.decodeToken, TodosController.createTodo);

  router.route("/api/v1/todos/:id")
  .get(Middleware.decodeToken, TodosController.findATodo)
  .put(Middleware.decodeToken, TodosController.updateATodo)
  .delete(Middleware.decodeToken, TodosController.deleteATodo);

  // todoItems routes
  router.route("/api/v1/todos/:todoId/todoItems")
  .post(Middleware.decodeToken, TodoItemsController.createTodoItem)
  .get(Middleware.decodeToken, TodoItemsController.getAllTodoItems);

  router.route("/api/v1/todos/:todoId/todoItems/:todoItemId")
  .delete(Middleware.decodeToken, TodoItemsController.deleteATodoItem)
  .put(Middleware.decodeToken, TodoItemsController.updateATodoItem)
  .get(Middleware.decodeToken, TodoItemsController.getATodoItem);

  // user routes
  router.route("/api/v1/users")
  .post(UserController.createUser)
  .get(Middleware.decodeToken, UserController.getAllUsers);

  router.route("/api/v1/users/:userId")
  .get(Middleware.decodeToken, UserController.getAUser)
  .delete(Middleware.decodeToken, UserController.softDeleteUser);

  router.route("/api/v1/login")
  .post(UserController.userLogin);


export default router;
