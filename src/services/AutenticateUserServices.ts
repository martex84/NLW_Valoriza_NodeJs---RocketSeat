import { getCustomRepository } from "typeorm";
import { compare } from "bcryptjs";
import { sign } from "jsonwebtoken"

import { UserRepositories } from "../repositories/UserRepositories";

interface IAutenticateUser {
    email: string;
    password: string;
}

export class AutenticateUserServices {

    async execute({
        email,
        password
    }: IAutenticateUser) {
        const userRepositories = getCustomRepository(UserRepositories);

        const user = await userRepositories.findOne({
            email
        });

        if (!user) {
            throw new Error("Email/Password incorrect");
        }

        const passwordMatch = await compare(password, user.password)

        if (!passwordMatch) {
            throw new Error("Email/Password incorrect");
        }

        const token = sign({
            email: user.email
        }, "ad1f6dd8a6cb6247debf3599a46a02de", {
            subject: user.id,
            expiresIn: "1d"
        })

        return token;
    }
}