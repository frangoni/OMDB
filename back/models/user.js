const { Model, DataTypes } = require("sequelize");
const db = require("../db");
const { hash, genSalt } = require("bcrypt");
const Favourite = require("./favourite");

class User extends Model {
  hashPassword(password) {
    return hash(password, this.salt);
  }
}

User.init(
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      unique: true,
      validate: {
        isEmail: true,
      },
    },

    password: {
      type: DataTypes.STRING,
      required: true,
      validate: {
        notEmpty: true,
      },
    },
    salt: {
      type: DataTypes.STRING,
    },
  },
  { sequelize: db, modelName: "user" }
);

User.beforeCreate((user) => {
  return genSalt(16)
    .then((salt) => {
      user.salt = salt;
      return hash(user.password, user.salt);
    })
    .then((hash) => {
      user.password = hash;
    });
});

User.hasMany(Favourite);

module.exports = User;
