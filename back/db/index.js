const Sequelize = require('sequelize');
const db = new Sequelize('omdb', 'postgres', null, {
  dialect: 'postgres',
  host: 'localhost',
  logging: false,
});

module.exports = db;
