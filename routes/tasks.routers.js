const express = require("express");
const {
  tasksAll,
  tasksAllstatus,
  taskscreate,
  tasksdelete,
  tasksupdate,
} = require("../controllers/tasks.controllers");

const tasksrouters = express.Router();
tasksrouters.get("/", tasksAll);
tasksrouters.get("/:status", tasksAllstatus);
tasksrouters.post("/", taskscreate);
tasksrouters.patch("/:id", tasksupdate);
tasksrouters.delete("/:id", tasksdelete);

module.exports = { tasksrouters };
