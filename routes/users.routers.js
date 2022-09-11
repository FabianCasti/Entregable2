const express = require("express");
const {
  userAll,
  createuser,
  deleteUser,
  updateUser,
} = require("../controllers/users.controllers");

const Usersrouters = express.Router();
Usersrouters.get("/", userAll);
Usersrouters.post("/", createuser);
Usersrouters.patch("/:id", updateUser);
Usersrouters.delete("/:id", deleteUser);

module.exports = { Usersrouters };
