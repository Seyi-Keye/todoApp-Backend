import { User, Todo } from "../models";
import signedToken from "../utils/signToken";
import verifyPassword from "../utils/verifyPassword";

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
      attributes: ["id", "name", "email", "isDeleted", "createdAt", "updatedAt"],
      include: [{
        model: Todo,
        as: "todos"
      }]
    })
    .then(user => {
      if(!user) return res.status(404).send({
        message: "User not found"
      });
      res.status(200).send(user);
    })
    .catch(err => {
      res.status(500).send(err);
    });
  },

  softDeleteUser(req, res) {
    User.findById(req.params.userId)
    .then(user => {
      if (!user) {
        return res.status(400).send({
        message: "User not found"
      });
    } else if (user && user.isDeleted) {
      return res.status(400).send({
        message: "User already deleted"
      });
    }
    return user
    .update({
      isDeleted: true
    })
    .then(() => res.status(200).send({
      message: "User deleted"
    }))
    .catch(err => res.status(500).send(err));
    })
    .catch(err => res.status(500).send(err));
  },

  userLogin(req, res) {
    User.findOne({
      where: {
        email: req.body.email
      }
    })
    .then(user => {
      if(!user) {
        return res.status(404).send({
        message: "User not found" });
      } else if (!verifyPassword(req.body.password, user.password)) {
        return res.status(401).send({
          message: "Incorrect Password" });
      }
      const token = signedToken(user.id);
      return res.status(200).send({
        message: "User sign in successful",
        token,
        user: {
          id: user.id,
          name: user.name,
          email: user.email,
          isDeleted: user.isDeleted
        }
       });
    })
    .catch(err => res.status(500).send(err));
  }
};

export default UserController;
