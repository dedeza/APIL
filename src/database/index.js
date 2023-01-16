const sequelize = require('sequelize');
const dbConfig = require('../config/config');
const User = require('../models/user');
const Livro = require('../models/livros');
const Mensagem = require('../models/mensagens');

const connection = new sequelize(dbConfig.development);

User.init(connection);
Livro.init(connection);
Mensagem.init(connection);
User.associate(connection.models);
Livro.associate(connection.models);
Mensagem.associate(connection.models);



module.exports = connection;