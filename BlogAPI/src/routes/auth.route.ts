import { NextFunction, Request, Response, Router } from "express";
import { StatusCodes } from "http-status-codes";
import { basicAuthMiddleware } from "@middlewares/basic-auth.middleware";
import { JWTAuthenticationMiddleware } from "@middlewares/jwt-authentication.middleware";
import { authUserController } from '@useCases/Auth/AuthUser';


const router = Router();

router.post('/login', basicAuthMiddleware, async (request: Request, response: Response, next: NextFunction) => {
    return authUserController.handle(request, response, next)
});

router.post('/login/validate', JWTAuthenticationMiddleware, async (request: Request, response: Response, next: NextFunction) =>{
    response.status(StatusCodes.OK).json({
        message: 'Token is valid'
    })
})

export { router as AuthRouter };
