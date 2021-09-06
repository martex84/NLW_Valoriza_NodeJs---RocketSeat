import { getCustomRepository } from "typeorm";

import { ComplimentsRepositories } from "../repositories/ComplimentsRepositories"

export class ListUserSendComplimentsService {
    async execute(user_id: string) {
        const complimentsRepository = getCustomRepository(ComplimentsRepositories);

        const listReceiver = await complimentsRepository.find({
            where: {
                user_sender: user_id
            }
        })

        return listReceiver
    }
}