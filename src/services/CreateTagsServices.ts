import { getCustomRepository } from "typeorm";

import { TagsRepositories } from "../repositories/TagsRespositories"

interface IUserRequest {
    name: string;
}

export class CreateTagsServices {
    async execute({
        name
    }: IUserRequest) {
        const tagsRepository = getCustomRepository(TagsRepositories);

        if (!name) {
            throw new Error("Name tag incorrect")
        }

        const userAlreadyExists = await tagsRepository.findOne({ name })

        if (userAlreadyExists) {
            throw new Error("User already exists")
        }

        const tag = tagsRepository.create({
            name
        });

        await tagsRepository.save(tag);

        return tag;
    }
}