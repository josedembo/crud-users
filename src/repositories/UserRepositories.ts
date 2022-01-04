import { Repository, EntityRepository } from "typeorm";
import { User } from "../entity/User";

@EntityRepository(User)
class UserRepositories extends Repository<User>{ }

export { UserRepositories }