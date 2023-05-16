const Sequelize = require('sequelize');

const sequelize = new Sequelize('senac_consultas', 'root', 'WesleySToS1996', {
  host: 'localhost',
  dialect: 'mysql',
});

module.exports = sequelize;