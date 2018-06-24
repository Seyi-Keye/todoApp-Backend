module.exports = {
  up: (queryInterface, Sequelize) =>
    queryInterface.createTable("TodoItems", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      content: {
        type: Sequelize.STRING,
        allowNull: false
      },
      complete: {
        type: Sequelize.BOOLEAN,
        defaultValue: false
      },
      todoId: {
        type: Sequelize.INTEGER,
        onDelete: "CASCADE",
        references: {
          model: "Todos",
          key: "id",
          as: "todoId"
        }
      },
      userId: {
        type: Sequelize.INTEGER,
        onDelete: "CASCADE",
        references: {
          model: "Todos",
          key: "id",
          as: "userId"
        },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
      }
    }),
  down: (queryInterface /* , Sequelize */) =>
    queryInterface.dropTable("TodoItems")
};
