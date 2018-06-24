require("dotenv").config();
import express from "express";
import logger from "morgan";
import bodyParser from "body-parser";


// require routes
const port = process.env.PORT || 8000;

import router from "./server/routes/index";

// Set up the express app
const app = express();

app.use(logger("dev"));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(router);

app.get("*", (req, res) =>
  res.status(200).send({
    message: "Welcome to this Todo List App"
  })
);

app.set("port", port);
/* eslint no-console:0 */
app.listen(port, () => console.log(`Server is live on port ${port}`));
