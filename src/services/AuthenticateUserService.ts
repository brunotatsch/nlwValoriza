import { getCustomRepository } from "typeorm";
import { UserRepository } from "../repositories/UserRepositories";
import { ErrorNlw } from "../utils/ErrorNlw";
import { compare } from "bcryptjs";
import { sign } from "jsonwebtoken";

interface IAuthenticateUserService {
  email: string,
  password: string
}

class AuthenticateUserService {
  async execute({ email, password }: IAuthenticateUserService) {
    // verificar se existe email
    const userRepository = getCustomRepository(UserRepository);

    const user = await userRepository.findOne({ email, })

    if (!user) {
      throw new ErrorNlw(400, 'Email/Password incorrect');
    }
    // verificar a senha
    const passwordMatch = await compare(password, user.password)

    if (!passwordMatch) {
      throw new ErrorNlw(400, 'Email/Password incorrect');
    }

    const token = sign({ email: user.email }, "c4a61b320a19843087ff3f887270dc7f", { subject: user.id, expiresIn: "1d" });

    return token;
  }
};

export { AuthenticateUserService };