const mongoose = require('mongoose');

const AlocacaoSchema = new mongoose.Schema({
  alunoId: { type: mongoose.Schema.Types.ObjectId, ref: 'Aluno', required: true },
  armarioId: { type: mongoose.Schema.Types.ObjectId, ref: 'Armario', required: true },
  dataAlocacao: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Alocacao', AlocacaoSchema);
