import { User } from "../models";
import signedToken from "../utils/signToken";

const UserController = {
  createUser(req, res) {
    return User.create(req.body)
    .then(newUser => {
      const token = signedToken(newUser.id);
      res.status(201).send({
      message: "User created",
      token,
      user: {
        id: newUser.id,
        name: newUser.name,
        email: newUser.email
      }
    });
  })
    .catch(err => {
      res.status(400).send(err
    );});
  },

  getAllUsers(req, res) {
    return User
    .findAll({
      attributes: ["id", "name", "email", "isDeleted", "createdAt", "updatedAt"]
    })
    .then(users => {
      if(!users) return res.status(404).send({
        message: "No user found"
      });
      res.status(200).send(users);
    })
    .catch(err => res.status(500).send(err));
  },

  getAUser(req, res) {
    return User
    .findOne({
      where: {
        id: req.params.userId
      },
      attributes: ["id", "name", "email", "isDeleted", "createdAt", "updatedAt"]
    })
    .then(user => {
      if(!user) return res.status(404).send({
        message: "User not found"
      });
      res.status(200).send(user);
    })
    .catch(err => res.status(500).send(err));
  }
};

export default UserController;
