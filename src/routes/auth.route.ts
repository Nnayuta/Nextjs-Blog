import { NextFunction, Request, Response, Router } from "express";
import { StatusCodes } from "http-status-codes";
import { basicAuthMiddleware } from "../middlewares/basic-auth.middleware";

import { authUserController } from '../useCases/Auth/AuthUser'

const router = Router();

router.post('/login', basicAuthMiddleware, async (request: Request, response: Response, next: NextFunction) => {
    return authUserController.handle(request, response, next)
});

export { router as AuthRouter };