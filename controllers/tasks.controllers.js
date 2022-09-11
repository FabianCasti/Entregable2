const { Tasks } = require("../models/tasks.models");
const statustasks = ["active", "completed", "late", "cancelled"];
const tasksAll = async (req, res) => {
  try {
    const tasks = await Tasks.findAll();

    res.status(200).json({
      status: "success",
      data: {
        tasks,
      },
    });
  } catch (error) {
    console.log(error);
  }
};

const taskscreate = async (req, res) => {
  try {
    await Tasks.create({
      title: req.body.title,
      userId: req.body.userId,
      limitDate: req.body.limitDate,
      startDate: req.body.startDate,
      status: "active",
    });

    res.status(201).json({
      status: "success",
    });
  } catch (error) {
    console.log(error);
  }
};

const tasksdelete = async (req, res) => {
  try {
    const { id } = req.params;
    const tasks = await Tasks.findOne({ where: { id } });
    tasks.update({ status: "cancelled" });

    res.status(200).json({
      status: "success",
    });
  } catch (error) {
    console.log(error);
  }
};

const tasksupdate = async (req, res) => {
  try {
    const { id } = req.params;
    const task = await Tasks.findOne({ where: { id } });

    if (!task) {
      res.status(404).json({
        status: "Not found",
      });
      return;
    }
    const time = new Date(req.body.time);
    const limit = new Date(task.limitDate);

    const status = time.getTime() > limit.getTime() ? "late" : "completed";
    task.update({ status, finishDate: req.body.time });

    res.status(200).json({
      status: "success",
    });
  } catch (error) {
    console.log(error);
  }
};

const tasksAllstatus = async (req, res) => {
  try {
    const { status } = req.params;
    if (!statustasks.includes(status)) {
      res.status(500).json({
        status: "error",
      });
      return;
    }

    const tasks = await Tasks.findAll({ where: { status } });

    res.status(200).json({
      status: "success",
      data: {
        tasks,
      },
    });
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  tasksAll,
  taskscreate,
  tasksdelete,
  tasksupdate,
  tasksAllstatus,
};
