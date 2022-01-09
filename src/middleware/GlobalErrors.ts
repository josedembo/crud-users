import { NextFunction, Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import { AppError } from "../models/errors/AppError";

function errorHandle(error: Error, request: Request, response: Response, next: NextFunction) {

    if (error instanceof AppError) {

        const errorMessage = {
            status: "error",
            message: error.message,
        }

        return response.status(error.statusCode).json(errorMessage);
    }

    return response.sendStatus(StatusCodes.INTERNAL_SERVER_ERROR);
}

export { errorHandle }