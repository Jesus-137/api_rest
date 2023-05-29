import express from 'express';
import usuariosRouter from './entities/User/infrastructure/routers/UsuariosRuoter';

const app = express();
const PORT = 3000;

app.disable("x-powered-by");
app.use(express.json());
app.use('/usuarios', usuariosRouter);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
