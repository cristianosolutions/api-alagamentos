// server.js
// Arquivo principal que inicializa a aplicação

const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./src/config/db');
const alertaRoutes = require('./src/routes/alertaRoutes');
const errorHandler = require('./src/middlewares/errorHandler');

// Carrega as variáveis de ambiente
dotenv.config();

// Conecta ao banco de dados MongoDB
connectDB();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware para analisar o corpo das requisições JSON
app.use(express.json());

// Rotas da API
app.use('/api/alertas', alertaRoutes);

// Middleware de tratamento de erros global
app.use(errorHandler);

// Inicia o servidor
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});