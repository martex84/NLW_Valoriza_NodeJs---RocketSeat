import { getCustomRepository } from "typeorm";

import { ComplimentsRepositories } from "../repositories/ComplimentsRepositories";
import { UserRepositories } from "../repositories/UserRepositories"

interface IUserRequest {
    user_sender: string;
    user_receiver: string;
    tag_id: string;
    message: string;

}

export class CreateComplimentsServices {
    async execute({
        user_sender,
        user_receiver,
        tag_id,
        message

    }: IUserRequest) {
        const tagsRepository = getCustomRepository(ComplimentsRepositories);
        const userRepository = getCustomRepository(UserRepositories);

        if (user_sender === user_receiver) {
            throw new Error("User receiver incorrect")
        }

        const userReceiverExist = await userRepository.findOne(user_receiver);

        if (!userReceiverExist) {
            throw new Error("User receiver incorrect")
        }

        const compliments = tagsRepository.create({
            user_sender,
            user_receiver,
            tag_id,
            message
        });

        await tagsRepository.save(compliments);

        return compliments;
    }
}