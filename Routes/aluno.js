const express = require('express');
const router = express.Router();
const Aluno = require('../Models/Aluno');

// Criar aluno
router.post('/', async (req, res) => {
  try {
    const novoAluno = new Aluno(req.body);
    await novoAluno.save();
    res.status(201).send(novoAluno);
  } catch (err) {
    res.status(400).send(err);
  }
});

module.exports = router;
