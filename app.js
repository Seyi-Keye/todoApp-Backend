import express from "express";
import logger from "morgan";
import bodyParser from "body-parser";

// Set up the express app
const app = express();
import server from "./server/routes";

server = server(app);
// Log requests to the console.
server.use(logger("dev"));

server.use(bodyParser.json());
server.use(bodyParser.urlencoded({ extended: false }));

// require routes
const port = parseInt(process.env.PORT, 10) || 8000;

// Setup a default catch-all route that sends back a welcome message in JSON format.
server.get("*", (req, res) =>
  res.status(200).send({
    message: "Welcome to this Todo List App",
  })
);

server.set("port", port);
/* eslint no-console:0 */
server.listen(port, () => console.log(`Server is live on port ${port}`));
