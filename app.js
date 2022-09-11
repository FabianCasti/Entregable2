//import express
const express = require("express");
const { db } = require("./utils/database.utils");
const { Usersrouters } = require("./routes/users.routers");
const { tasksrouters } = require("./routes/tasks.routers");

//initialitate express
const app = express();
app.use(express.json());

app.use("/api/v1/users", Usersrouters);
app.use("/api/v1/tasks", tasksrouters);

db.authenticate()
  .then(() => console.log("conexion exitosa"))
  .catch(() => console.log("conexion bd incorrecta"));

db.sync()
  .then(() => console.log("sync exitosa"))
  .catch(() => console.log("sync bd incorrecta"));

// listen port
app.listen(4000, console.log("express runing.."));
