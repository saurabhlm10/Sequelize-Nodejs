const Sequelize = require('sequelize');
const sequelize = require('../sequelize'); // Adjust the path if necessary

const User = sequelize.define(
  'user',
  {
    // Model attributes are defined here
    firstName: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    lastName: {
      type: Sequelize.STRING,
      // allowNull defaults to true
    },
  },
  {
    // Other model options go here
  }
);

module.exports = User;
