import { getCustomRepository } from "typeorm";
import { classToPlain } from "class-transformer";

import { TagsRepositories } from "../repositories/TagsRespositories"

export class ListTagServices {

    async execute() {
        const tagRepositories = getCustomRepository(TagsRepositories);

        const listTags = await tagRepositories.find();

        return classToPlain(listTags);

    }
}