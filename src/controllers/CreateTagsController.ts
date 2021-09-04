import { Request, Response } from "express";
import { CreateTagsServices } from "../services/CreateTagsServices"

export class CreateTagsController {
    async handle(request: Request, response: Response) {
        const {
            name
        } = request.body;

        const createTagsService = new CreateTagsServices();

        const tags = await createTagsService.execute({
            name
        });

        return response.json(tags);
    }
}