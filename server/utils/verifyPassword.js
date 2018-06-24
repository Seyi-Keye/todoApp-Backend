import bcrypt from "bcrypt";

const verifyPassword = (requestPassword, hashPassword) => {
  console.log("result", bcrypt.compareSync(requestPassword, hashPassword));
  return bcrypt.compareSync(requestPassword, hashPassword);
};

export default verifyPassword;
