const { Sequelize, DataTypes } = require("sequelize");

const db = new Sequelize({
  dialect: "postgres",
  host: "localhost",
  username: "postgres",
  password: "12345",
  port: 5432,
  database: "Entregable",
});

module.exports = { db, DataTypes };
