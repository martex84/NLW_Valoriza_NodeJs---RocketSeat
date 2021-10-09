import { Request, Response } from "express";
import { CreateUserServices } from "../services/CreateUserServices";
import { hash } from "bcryptjs";

export class CreateUserController {
    async handle(request: Request, response: Response) {
        const {
            name,
            email,
            password,
            admin
        } = request.body;

        const createUserService = new CreateUserServices();

        const hasPassword = await hash(password, 8);

        const user = await createUserService.execute({
            name,
            email,
            password: hasPassword,
            admin
        });

        return response.json(user);
    }
}