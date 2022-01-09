import { CreateUserService } from "../../service/user/CreateUserService";
import { NextFunction, Request, Response } from "express";
import { StatusCodes } from "http-status-codes";

class CreateUserController {

    async handle(request: Request, response: Response, next: NextFunction): Promise<Response | undefined> {
        try {
            const { name, username, email, password, phone } = request.body;

            const service = new CreateUserService();

            const user = await service.execute({ name, username, email, password, phone });

            return response.status(StatusCodes.CREATED).json(user);

        } catch (error) {

            next(error)
        }
    }
}

export { CreateUserController }