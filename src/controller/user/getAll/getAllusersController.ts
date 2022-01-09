import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import { getAllUsersService } from "../../../service/user/getAllUsersService";

class GetAllUsersController {

    async handle(request: Request, response: Response): Promise<Response> {

        const service = new getAllUsersService();
        const users = await service.execute();

        return response.status(StatusCodes.OK).json(users);
    }
}

export { GetAllUsersController }