const { Users } = require("../models/users.models");
const userAll = async (req, res) => {
  try {
    const users = await Users.findAll({ where: { status: "active" } });

    res.status(200).json({
      status: "success",
      data: {
        users,
      },
    });
  } catch (error) {
    console.log(error);
  }
};

const createuser = async (req, res) => {
  try {
    await Users.create({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
      status: "active",
    });

    res.status(201).json({
      status: "success",
    });
  } catch (error) {
    console.log(error);
  }
};

const deleteUser = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await Users.findOne({ where: { id } });
    user.update({ status: "delete" });

    res.status(200).json({
      status: "success",
    });
  } catch (error) {
    console.log(error);
  }
};

const updateUser = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await Users.findOne({ where: { id } });
    user.update({ name: req.body.name, email: req.body.email });

    res.status(200).json({
      status: "success",
    });
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  userAll,
  createuser,
  deleteUser,
  updateUser,
};
