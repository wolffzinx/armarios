const express = require('express');
const router = express.Router();
const Armario = require('../Models/Armario');

// Adicionar novo armário
router.post('/', async (req, res) => {
  try {
    const novoArmario = new Armario(req.body);
    await novoArmario.save();
    res.status(201).send(novoArmario);
  } catch (err) {
    res.status(400).send(err);
  }
});

module.exports = router;
