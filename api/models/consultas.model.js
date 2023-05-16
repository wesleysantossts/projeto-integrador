const Sequelize = require('sequelize');
const connection = require('../config');

const Consultas = connection.define('consultas', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false
  },
  medico: {
    type: Sequelize.STRING,
    allowNull: false
  },
  data: {
    type: Sequelize.STRING,
    allowNull: false
  },
  local: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  horario: {
    type: Sequelize.STRING,
    allowNull: false,
  },
})

Consultas.sync();

(async () => {
  const consultas = await Consultas.findAll();

  if (consultas.length === 0) {
    await Consultas.create({
      medico: 'Geriatra',
      data: '01012024',
      local: 'Policlinica',
      horario: '1530',
    });
    console.log('Nova consulta criada com sucesso');
  }
})();

module.exports = Consultas;