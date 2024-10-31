const mongoose = require('mongoose');

const AlunoSchema = new mongoose.Schema({
  nome: { type: String, required: true },
  statusPagamento: { type: Boolean, default: false },
});

module.exports = mongoose.model('Aluno', AlunoSchema);
