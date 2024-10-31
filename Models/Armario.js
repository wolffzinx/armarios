const mongoose = require('mongoose');

const ArmarioSchema = new mongoose.Schema({
  numero: { type: Number, required: true },
  status: { type: String, default: 'disponível' }, // disponível, ocupado
});

module.exports = mongoose.model('Armario', ArmarioSchema);
