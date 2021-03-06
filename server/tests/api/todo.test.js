import supertest from "supertest";
import app from "../../../app";
import TodoController from "../../controllers/TodoController";
import models from "../../models";

const request = supertest(app);
describe("Todo controller: ", () => {
  const promisify = (path, data, token) => new Promise((resolve, reject) => {
    request
      .post(path)
      .set("Content-Type", "application/json")
      .send(data)
      .end((err, res) => {
        if (err) {
          reject(err);
        }
        resolve(res);
      });
  });

  describe("createTodo", () => {
    it("successfully creates a todo", done => {
      request.get("/").then(response => {
        expect(response.status).toBe(200);
        expect(response.text).toBe("{\"message\":\"Welcome to this Todo List App\"}");
        done();
      });
    });
  });
});
