module.exports = {
  up (queryInterface, Sequelize) {
   queryInterface.createTable("User", {
     id: {
       allowNull: false,
       autoIncrement: true,
       primaryKey: true,
       type: Sequelize.INTEGER
     },
     name: {
       type: Sequelize.STRING,
       allowNull: false
     },
     email: {
      type: Sequelize.STRING,
      allowNull: false
     },
     password: {
      type: Sequelize.STRING,
      allowNull: false
     },
     isDeleted: {
      type: Sequelize.BOOLEAN,
      defaultValue: false
     },
     createdAt: {
      allowNull: false,
      type: Sequelize.DATE
     },
     updatedAt: {
      allowNull: false,
      type: Sequelize.DATE
     }
   });
  },

  down (queryInterface) {
   queryInterface.dropTable("User");
  }
};