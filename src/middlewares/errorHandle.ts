import { NextFunction, Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import { DatabaseError } from "../entities/errors/DatabaseError.error.model";
import { ForbiddenError } from "../entities/errors/Forbidden.error.model";

export function errorHandle(error: any, req: Request, res: Response, next: NextFunction) {
    if (error instanceof DatabaseError) {
        res.sendStatus(StatusCodes.BAD_REQUEST)
    }
    else if (error instanceof ForbiddenError) {
        res.sendStatus(StatusCodes.FORBIDDEN)
    }
    else {
        res.sendStatus(StatusCodes.INTERNAL_SERVER_ERROR)
    }
}