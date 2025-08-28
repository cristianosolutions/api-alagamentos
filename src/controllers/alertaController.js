// Lógica de negócio dos endpoints da API

const Alerta = require('../models/Alerta');

// Endpoint 1: Criar um novo alerta (POST /api/alertas)
const criarAlerta = async (req, res, next) => {
  try {
    const { bairro, nivel_agua, status } = req.body;

    // Tratamento de erros e validação
    if (!bairro || !nivel_agua) {
      return res.status(400).json({ mensagem: 'O bairro e o nível da água são obrigatórios.' });
    }

    const novoAlerta = await Alerta.create({
      bairro,
      nivel_agua,
      status,
    });

    res.status(201).json({ mensagem: 'Alerta registrado com sucesso!', alerta: novoAlerta });
  } catch (error) {
    next(error); // Encaminha o erro para o middleware de tratamento de erros
  }
};

// Endpoint 2: Listar alertas por bairro (GET /api/alertas/:bairro)
const listarAlertasPorBairro = async (req, res, next) => {
  try {
    const { bairro } = req.params;
    const alertas = await Alerta.find({ bairro: bairro }).sort({ data_alerta: -1 });

    if (alertas.length === 0) {
      return res.status(404).json({ mensagem: 'Nenhum alerta encontrado para este bairro.' });
    }

    res.status(200).json(alertas);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  criarAlerta,
  listarAlertasPorBairro,
};