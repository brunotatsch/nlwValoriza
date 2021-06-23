import { getCustomRepository } from "typeorm";
import { TagRepository } from "../repositories/TagRepositories";


interface ITagRequest {
  name: string; 
}


class CreateTagService {

  async execute({ name }: ITagRequest) {
    const tagRepository = getCustomRepository(TagRepository);

    if (!name) {
      throw new Error("Tag name incorrect");
    }

    const tagAlreadyExists = await tagRepository.findOne({ name, })


    if (tagAlreadyExists) {
      console.log("erro");
      throw new Error("Tag name already exists");
    }

    const tag = tagRepository.create({
      name,
    })

    await tagRepository.save(tag);

    return tag;
  };
}

export { CreateTagService };