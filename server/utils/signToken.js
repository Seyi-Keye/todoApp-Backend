import jwt from "jsonwebtoken";

require("dotenv").config();

const secret = process.env.JWT_SECRET;

const signedToken = userId => {
  return jwt.sign({
    userId
  }, secret, {
      expiresIn: "24h"
    });
  };

  export default signedToken;
