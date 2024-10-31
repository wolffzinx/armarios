const express = require('express');
const mongoose = require('mongoose');
const app = express();
const port = 3000;

// Middlewares
app.use(express.json());

// Rotas
const alunoRoutes = require('./routes/aluno');
const armarioRoutes = require('./routes/armario');
const alocacaoRoutes = require('./routes/alocacao');

app.use('/aluno', alunoRoutes);
app.use('/armario', armarioRoutes);
app.use('/alocacao', alocacaoRoutes);

// Conectar ao banco de dados (MongoDB)
const connectDB = async () => {
  try {
    await mongoose.connect('mongodb://localhost/locker-management', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('Conectado ao MongoDB com sucesso!');
  } catch (error) {
    console.error('Erro ao conectar ao MongoDB:', error.message);
    process.exit(1); // Encerra o servidor em caso de falha na conexão
  }
};

connectDB();

// Iniciar servidor
app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
