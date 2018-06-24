import jwt from "jsonwebtoken";

require("dotenv").config();

const Middleware = {
  decodeToken(req, res, next) {
    const token = req.body.token || req.headers.authorization || req.headers["x-access-token"];
    if(!token) {
      return res.status(401).send({
        message: "User not authorized, token required"
      });
    }
      jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
        if(err) {
          return res.status(401).send({
            err: err.message
          });
        }
        req.decoded = decoded;
        next();
      });
    }
};

export default Middleware;
