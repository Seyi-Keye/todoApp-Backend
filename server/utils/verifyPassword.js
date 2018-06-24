import bcrypt from "bcrypt";

const verifyPassword = (requestPassword, hashPassword) => {
  return bcrypt.compareSync(requestPassword, hashPassword);
};

export default verifyPassword;
