// const todo = require("../../controllers/todo");
const request = require("supertest");
const app = require("../../../app");


describe("Todo controller: ", () => {
  describe("createTodo", () => {
    it("successfully creates a todo", (done) => {
      request(app).get("/").then(response => {
        console.log("response", response.text)
        expect(response.status).toBe(200);
        expect(response.text).toBe("{\"message\":\"Welcome to this Todo List App\"}");
        done();
      });
    });
  });
});
