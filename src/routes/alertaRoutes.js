// src/routes/alertaRoutes.js
// Definição das rotas da API

const express = require('express');
const {
  criarAlerta,
  listarAlertasPorBairro,
} = require('../controllers/alertaController');

const router = express.Router();

/**
 * @swagger
 * /api/alertas:
 * post:
 * summary: Registra um novo alerta de alagamento.
 * tags: [Alertas]
 * requestBody:
 * required: true
 * content:
 * application/json:
 * schema:
 * type: object
 * properties:
 * bairro: { type: string }
 * nivel_agua: { type: number }
 * status: { type: string, enum: ['emergencia', 'alerta', 'normal'] }
 * responses:
 * 201:
 * description: Alerta registrado com sucesso.
 * 400:
 * description: Dados obrigatórios faltando.
 */
router.post('/', criarAlerta);

/**
 * @swagger
 * /api/alertas/{bairro}:
 * get:
 * summary: Lista alertas de alagamento por bairro.
 * tags: [Alertas]
 * parameters:
 * - in: path
 * name: bairro
 * schema:
 * type: string
 * required: true
 * description: Nome do bairro para buscar alertas.
 * responses:
 * 200:
 * description: Lista de alertas encontrada.
 * 404:
 * description: Nenhum alerta encontrado para este bairro.
 */
router.get('/:bairro', listarAlertasPorBairro);

module.exports = router;