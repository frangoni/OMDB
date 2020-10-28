const Sequelize = require("sequelize");
const db = new Sequelize("omdb", null, null, {
  dialect: "postgres",
  host: "localhost",
  logging: false,
});

module.exports = db;
