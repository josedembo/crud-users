import { CreateUserService } from "../../service/user/CreateUserService";
import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";

class CreateUserController {

    async handle(request: Request, response: Response): Promise<Response> {

        const { name, username, email, password, phone } = request.body;

        const service = new CreateUserService();

        const user = await service.execute({ name, username, email, password, phone });

        return response.status(StatusCodes.CREATED).json(user);
    }
}

export { CreateUserController }