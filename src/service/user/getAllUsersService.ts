import { UserRepositories } from "../../repositories/UserRepositories";
import { getCustomRepository } from "typeorm"
import { User } from "../../entity/User";

class getAllUsersService {

    async execute(): Promise<User[]> {
        const userRepositories = getCustomRepository(UserRepositories);
        const allUsers = await userRepositories.find();

        return allUsers;
    }

}

export { getAllUsersService }