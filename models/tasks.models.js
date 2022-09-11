const { db, DataTypes } = require("../utils/database.utils");

const Tasks = db.define("Tasks", {
  id: {
    primaryKey: true,
    type: DataTypes.INTEGER,
    autoIncrement: true,
    allowNull: false,
  },
  userId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  title: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  limitDate: {
    type: DataTypes.DATE,
    allowNull: true,
  },
  startDate: {
    type: DataTypes.DATE,
    allowNull: true,
  },
  finishDate: {
    type: DataTypes.DATE,
    allowNull: true,
  },
  status: {
    type: DataTypes.STRING,
    allowNull: true,
    defaultValue: "active",
  },
});

module.exports = { Tasks };
