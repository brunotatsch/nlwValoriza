import { getCustomRepository } from "typeorm";
import { classToPlain } from "class-transformer";
import { UserRepositories } from "../../infra/typeorm/repositories/UserRepositories";


class ListUsersService {

  async execute() {

    const userRepositories = getCustomRepository(UserRepositories);

    const users = await userRepositories.find()

    return classToPlain(users);
  }
}

export { ListUsersService };