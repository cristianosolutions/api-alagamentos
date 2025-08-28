// Configuração da conexão com o MongoDB

const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI);
    console.log(`MongoDB Conectado: ${conn.connection.host}`);
  } catch (error) {
    console.error(`Erro na conexão com o MongoDB: ${error.message}`);
    process.exit(1); // Sai com falha em caso de erro
  }
};

module.exports = connectDB;