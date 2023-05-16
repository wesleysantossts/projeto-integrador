const Sequelize = require('sequelize');
const connection = require('../config');

const Usuarios = connection.define('usuarios', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false
  },
  nome: {
    type: Sequelize.STRING,
    allowNull: false
  },
  dataNascimento: {
    type: Sequelize.STRING,
    allowNull: false
  },
  celular: {
    type: Sequelize.STRING(11),
    allowNull: false,
  }
})

Usuarios.sync();

(async () => {
  const users = await Usuarios.findAll();

  if (users.length === 0) {
    await Usuarios.create({
      nome: 'Admin',
      dataNascimento: '1989-01-15',
      celular: '13999999999',
    });
    console.log('Novo usuário criado');
  }
})();

module.exports = Usuarios;