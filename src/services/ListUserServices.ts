import { getCustomRepository } from "typeorm";
import { classToPlain } from "class-transformer";

import { UserRepositories } from "../repositories/UserRepositories";

export class ListUserServices {
    async execute() {
        const listUserServices = getCustomRepository(UserRepositories);

        const listUser = await listUserServices.find();

        return classToPlain(listUser);
    }
}