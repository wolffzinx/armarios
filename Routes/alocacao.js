const express = require('express');
const router = express.Router();
const Alocacao = require('../Models/Alocacao');
const Armario = require('../Models/Armario');

// Alocar armário ao aluno
router.post('/', async (req, res) => {
  try {
    const { alunoId, armarioId } = req.body;

    // Verificar se o armário está disponível
    const armario = await Armario.findById(armarioId);
    if (armario.status === 'ocupado') {
      return res.status(400).send({ message: 'Armário já ocupado' });
    }

    // Criar alocação
    const novaAlocacao = new Alocacao({ alunoId, armarioId });
    await novaAlocacao.save();

    // Atualizar status do armário para ocupado
    armario.status = 'ocupado';
    await armario.save();

    res.status(201).send(novaAlocacao);
  } catch (err) {
    res.status(400).send(err);
  }
});

module.exports = router;
