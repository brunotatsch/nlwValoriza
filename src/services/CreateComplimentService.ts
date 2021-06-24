import { getCustomRepository } from "typeorm";
import { ComplimentsRepository } from "../repositories/ComplimentsRepositories";
import { UserRepository } from "../repositories/UserRepositories";
import { ErrorNlw } from "../utils/ErrorNlw";



interface IComplimentRequest {
  user_sender_id: string;
  user_receiver_id: string;
  tag_id: string;
  message: string
}


class CreateComplimentService {

  async execute({ user_sender_id, user_receiver_id, tag_id, message }: IComplimentRequest) {

    const createComplimentRepository = getCustomRepository(ComplimentsRepository);
    const userRepository = getCustomRepository(UserRepository);

    if (user_sender_id === user_receiver_id) {
      throw new ErrorNlw(400, "Incorret User Receiver");
    }

    const userReceiverExists = await userRepository.findOne(user_receiver_id);


    if (!userReceiverExists) {
      throw new ErrorNlw(400, "User receiver does not exists");
    }

    const compliments = createComplimentRepository.create({
      user_sender_id, user_receiver_id, tag_id, message
    })

    await createComplimentRepository.save(compliments);

    return compliments;
  };
}

export { CreateComplimentService };