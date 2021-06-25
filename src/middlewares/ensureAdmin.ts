import { Request, Response, NextFunction } from "express";
import { UserRepositories } from "../repositories/UserRepositories";
import { getCustomRepository } from "typeorm";




async function ensureAdmin(request: Request, response: Response, next: NextFunction) {

  const { user_id } = request;

  const userRepository = getCustomRepository(UserRepositories);
  
  const user = await userRepository.findOne(user_id);

  //console.log(user);

  if (user?.admin) {
    return next();
  }

  return response.status(401).json({ error: "Unauthorized !!!" })
}

export { ensureAdmin };   