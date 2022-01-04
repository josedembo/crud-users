import { CreateUserDTO} from "../../dtos/CreateUserDTO";
import { getCustomRepository } from "typeorm";
import { UserRepositories } from "../../repositories/UserRepositories";
import { User } from "../../entity/User";

class CreateUserService {

    async execute({ name, username, email, password, phone }: CreateUserDTO): Promise<User> {

        const userRepositories = getCustomRepository(UserRepositories);

        const existUser = await userRepositories.find({ where: { username, email } });

        if (existUser) {
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

    }
}

export { CreateUserService }