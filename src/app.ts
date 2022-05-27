import express from "express";
import { PostRouter, UserRouter } from './routes'

const app = express();

app.use(express.json());
app.use(UserRouter);
app.use(PostRouter);

export { app };
