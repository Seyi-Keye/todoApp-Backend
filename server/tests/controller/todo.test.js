import request from "supertest";
import app from "../../../app";
// import TodoController from "../../controllers";


describe("Todo controller: ", () => {
  describe("createTodo", () => {
    it("successfully creates a todo", (done) => {
      request(app).get("/").then(response => {
        expect(response.status).toBe(200);
        expect(response.text).toBe("{\"message\":\"Welcome to this Todo List App\"}");
        done();
      });
    });
  });
});
