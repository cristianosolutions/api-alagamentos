// Testes unitários para os endpoints da API

const request = require('supertest');
const express = require('express');
const mongoose = require('mongoose');
const alertaRoutes = require('../routes/alertaRoutes');
const Alerta = require('../models/Alerta');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
app.use(express.json());
app.use('/api/alertas', alertaRoutes);

// Conecta ao banco de dados de teste e limpa a coleção antes de cada teste
beforeAll(async () => {
  await mongoose.connect(process.env.MONGO_URI);
});

afterEach(async () => {
  await Alerta.deleteMany({});
});

afterAll(async () => {
  await mongoose.connection.close();
});

describe('API de Alertas de Alagamentos', () => {
  // Teste de Sucesso para POST /api/alertas
  test('Deve criar um novo alerta', async () => {
    const novoAlerta = {
      bairro: 'Copacabana',
      nivel_agua: 1.5,
      status: 'alerta',
    };

    const response = await request(app).post('/api/alertas').send(novoAlerta);

    expect(response.statusCode).toBe(201);
    expect(response.body.mensagem).toBe('Alerta registrado com sucesso!');
    expect(response.body.alerta.bairro).toBe('Copacabana');
  });

  // Teste de Erro para POST /api/alertas
  test('Deve retornar 400 se o bairro for omitido', async () => {
    const alertaInvalido = {
      // bairro faltando
      nivel_agua: 0.8,
    };

    const response = await request(app).post('/api/alertas').send(alertaInvalido);

    expect(response.statusCode).toBe(400);
    expect(response.body.mensagem).toBe('O bairro e o nível da água são obrigatórios.');
  });

  // Teste de Sucesso para GET /api/alertas/:bairro
  test('Deve listar alertas de um bairro específico', async () => {
    await Alerta.create({
      bairro: 'Copacabana',
      nivel_agua: 1.2,
      status: 'alerta',
    });

    const response = await request(app).get('/api/alertas/Copacabana');

    expect(response.statusCode).toBe(200);
    expect(response.body.length).toBe(1);
    expect(response.body[0].bairro).toBe('Copacabana');
  });

  // Teste de Erro para GET /api/alertas/:bairro
  test('Deve retornar 404 se o bairro não tiver alertas', async () => {
    const response = await request(app).get('/api/alertas/Ipanema');

    expect(response.statusCode).toBe(404);
    expect(response.body.mensagem).toBe('Nenhum alerta encontrado para este bairro.');
  });
});