const express = require('express');
const cors = require('cors');
const app = express();
const db = require('./config');
const { Op } = require('sequelize');
const Consultas = require('./models/consultas.model');
const Usuarios = require('./models/usuarios.model');

db.authenticate()
  .then(() => console.log('Banco conectado com sucesso'))
  .catch(err => console.log('Erro ao conectar o banco', err));

app.use(express.json(), cors());


app.get('/usuario', async (req, res) => {
  const usuario = await Usuarios.findAll();
  
  if (usuario.length === 0) return res.status(404).json({ success: false, message: 'Consulta não encontrada' });

  return res.json({ success: true, usuario: usuario[0] });
});

app.post('/usuario/:id', async (req, res) => {
  const { id } = req.params;
  const { nome, dataNascimento, celular } = req.body;

  const usuario = await Usuarios.findByPk(id);
  
  if (!usuario) return res.status(404).json({ success: false, message: 'Consulta não encontrada' });

  await usuario.update({ nome, dataNascimento, celular });

  return res.json({ success: true });
});

app.post('/consulta', async (req, res) => {
  const { nome, descricao, preco } = req.body;

  if (
    !nome ||
    !descricao ||
    !preco
  ) return res.status(400).json({ success: false, message: 'Insira todas as informações' });

  const prod = await Consultas.create({ nome, descricao, preco });

  if (!prod) return res.status(400).json({ success: false, message: 'Erro ao criar o produto' });

  return res.json({ success: true, produto: prod });
});

app.get('/consultas', async (req, res) => {
  const consultas = await Consultas.findAll();
  
  if (consultas.length === 0) return res.status(404).json({ success: false, message: 'Consulta não encontrada' });

  return res.json({ success: true, consultas });
});


app.get('/consulta/:id', async (req, res) => {
  const { id } = req.params;

  const consulta = await Consultas.findByPk(id);
  
  if (!consulta) return res.status(404).json({ success: false, message: 'Consulta não encontrada' });

  return res.json({ success: true, consulta });
});

app.put('/consulta/:id', async (req, res) => {
  const { id } = req.params;
  const { medico, data, local, horario } = req.body;

  if (!id) return res.status(400).json({ success: false, message: 'Insira um id de um produto' });

  if (
    !medico && 
    !data &&
    !local &&
    !horario
  ) return res.status(400).json({ success: false, message: 'Insira um campo' });
  
  const consulta = await Consultas.findByPk(id);
  
  if (!consulta) return res.status(404).json({ success: false, message: 'Consulta não encontrada' });

  consulta.update({ medico, data, local, horario });

  await consulta.save();

  return res.json({ success: true, consulta });
});

app.delete('/consulta/:id', async (req, res) => {
  const { id } = req.params;

  if (!id) return res.status(400).json({ success: false, message: 'Insira um id de uma consulta' });

  const prod = await Consultas.destroy({ where: { id } });

  if (prod === 0) return  res.status(404).json({ success: false, message: 'Consulta não encontrada' });

  return res.json({ success: true, message: 'Consulta deletada com sucesso' });
});

app.listen(3002, () => console.log(`Servidor rodando na porta 3002`));