import { Request, Response } from "express";

import { ListUserServices } from "../services/ListUserServices";

export class ListUserController {
    async handle(request: Request, response: Response) {
        const listUserServices = new ListUserServices();

        const listUser = await listUserServices.execute();

        response.json(listUser);
    }
}