import { Request, Response } from "express";
import { AutenticateUserServices } from "../services/AutenticateUserServices";

export class AutenticateUserController {
    async handle(request: Request, response: Response) {
        const {
            name,
            email,
            password,
            admin
        } = request.body;

        const autenticateUserServices = new AutenticateUserServices();

        const token = await autenticateUserServices.execute({
            email,
            password
        });

        return response.json(token);
    }
}