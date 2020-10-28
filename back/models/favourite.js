const { Model, DataTypes } = require("sequelize");
const db = require("../db");

class Favourite extends Model {}

Favourite.init(
  {
    title: {
      type: DataTypes.STRING,
    },
    imdbId: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    poster: {
      type: DataTypes.STRING,
    },
    genre: {
      type: DataTypes.STRING,
    },
  },
  { sequelize: db, modelName: "favourite" }
);

module.exports = Favourite;
