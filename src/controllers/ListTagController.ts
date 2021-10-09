import { Request, Response } from "express";

import { ListTagServices } from "../services/ListTagServices";

export class ListTagController {
    async handle(request: Request, response: Response) {
        const listTagServices = new ListTagServices();

        const listTag = await listTagServices.execute();

        return response.json(listTag);
    }
}