import { CreateUserDTO } from "../../dtos/CreateUserDTO";
import { getCustomRepository } from "typeorm";
import { UserRepositories } from "../../repositories/UserRepositories";
import { User } from "../../entity/User";
import { AppError } from "../../models/errors/AppError";

class CreateUserService {

    async execute({ name, username, email, password, phone }: CreateUserDTO): Promise<User> {
        try {

            const userRepositories = getCustomRepository(UserRepositories);

            const existUser = await userRepositories.find({ where: { username, email } });

            if (existUser.length != 0) {
                throw new Error("user already exists");
            }

            const newUser = userRepositories.create({
                name,
                username,
                email,
                password,
                phone
            });

            const user = await userRepositories.save(newUser);

            return user;

        } catch (error) {
            throw new AppError("User already exists", 400);
        }
    }
}

export { CreateUserService }