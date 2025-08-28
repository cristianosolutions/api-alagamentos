// Definição do modelo de dados para um alerta

const mongoose = require('mongoose');

const alertaSchema = mongoose.Schema(
  {
    bairro: {
      type: String,
      required: true,
    },
    nivel_agua: {
      type: Number,
      required: true,
    },
    status: {
      type: String,
      required: true,
      enum: ['emergencia', 'alerta', 'normal'],
      default: 'normal',
    },
    data_alerta: {
      type: Date,
      default: Date.now,
    },
  },
  {
    timestamps: true, // Adiciona campos createdAt e updatedAt
  }
);

const Alerta = mongoose.model('Alerta', alertaSchema);

module.exports = Alerta;