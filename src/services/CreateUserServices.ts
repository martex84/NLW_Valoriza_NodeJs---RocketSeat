import { getCustomRepository } from "typeorm";

import { UserRepositories } from "../repositories/UserRepositories"

interface IUserRequest {
    name: string;
    email: string;
    password: string;
    admin?: boolean;
}

export class CreateUserServices {
    async execute({
        name,
        email,
        password,
        admin
    }: IUserRequest) {
        const userRepository = getCustomRepository(UserRepositories);

        if (!email) {
            throw new Error("Email incorrect")
        }

        const userAlreadyExists = await userRepository.findOne({ email })

        if (userAlreadyExists) {
            throw new Error("User already exists")
        }

        const user = userRepository.create({
            name,
            email,
            password,
            admin
        });

        await userRepository.save(user);

        return user;
    }
}