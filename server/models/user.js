const bcrypt = require("bcrypt");

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define("User", {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      required: true
    },
    email: {
      type: DataTypes.STRING,
      validate: {
        isEmail: true
      },
      allowNull: false,
      unique: true,
      required: true
    },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      min: 5
    },
    required: true
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
