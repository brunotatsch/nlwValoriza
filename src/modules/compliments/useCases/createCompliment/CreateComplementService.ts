import { getCustomRepository } from "typeorm";
import { ErrorNlw } from "../../../../utils/ErrorNlw";
import { UserRepositories } from "../../../users/infra/typeorm/repositories/UserRepositories";
import { ComplimentsRepositories } from "../../infra/typeorm/repositories/ComplimentsRepositories";




interface IComplimentRequest {
  user_sender_id: string;
  user_receiver_id: string;
  tag_id: string;
  message: string
}


class CreateComplimentService {

  async execute({ user_sender_id, user_receiver_id, tag_id, message }: IComplimentRequest) {

    const complimentsRepositories = getCustomRepository(ComplimentsRepositories);
    const userRepositories = getCustomRepository(UserRepositories);

    if (user_sender_id === user_receiver_id) {
      throw new ErrorNlw(400, "Incorret User Receiver");
    }

    const userReceiverExists = await userRepositories.findOne(user_receiver_id);


    if (!userReceiverExists) {
      throw new ErrorNlw(400, "User receiver does not exists");
    }

    const compliments = complimentsRepositories.create({
      user_sender_id, user_receiver_id, tag_id, message
    })

    await complimentsRepositories.save(compliments);

    return compliments;
  };
}

export { CreateComplimentService };