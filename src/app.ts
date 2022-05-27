import express from "express";
import { PostRouter, UserRouter } from './routes'
import { errorHandle } from './middlewares/errorHandle'

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(UserRouter);
app.use(PostRouter);

// Configuração dos Handle de Erro.
app.use(errorHandle);

export { app };
