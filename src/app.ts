import express from "express";
import { AuthRouter, PostRouter, UserRouter } from './routes'
import { errorHandle } from './middlewares/errorHandle'

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(AuthRouter);

app.use(UserRouter);
app.use(PostRouter);

app.use(errorHandle);

export { app };
