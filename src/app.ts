import express from 'express';
import usuariosRouter from './entities/User/infrastructure/router/UsuariosRuoter';

const app = express();
const PORT = 3000;

app.use(express.json());
app.use('/usuarios', usuariosRouter);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
