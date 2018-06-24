const bcrypt = require("bcrypt");

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define("User", {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    email: {
      type: DataTypes.STRING,
      validate: {
        isEmail: true
      },
      allowNull: false,
      unique: true
    },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      min: 5
    }
  },
    isDeleted: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
  }}, {
    hooks: {
      beforeCreate: (user) => {
        user.password = bcrypt.hashSync(user.password, bcrypt.genSaltSync(10));
      }
    }
  }
);

User.associate = (models) => {
    User.hasMany(models.Todo, {
      foreignKey: "userId",
      onDelete: "CASCADE"
    });
  };

  return User;
};
