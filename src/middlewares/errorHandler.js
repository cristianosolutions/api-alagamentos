// Middleware para tratamento de erros global

const errorHandler = (err, req, res, next) => {
  console.error(err.stack);
  const statusCode = res.statusCode === 200 ? 500 : res.statusCode;
  res.status(statusCode).json({
    mensagem: 'Ocorreu um erro no servidor.',
    erro: err.message,
  });
};

module.exports = errorHandler;