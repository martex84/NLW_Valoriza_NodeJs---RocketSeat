import { Request, Response } from "express";
import { CreateComplimentsServices } from "../services/CreateComplimentsServices"

export class CreateComplimentsController {
    async handle(request: Request, response: Response) {
        const {
            user_receiver,
            tag_id,
            message
        } = request.body;
        const { user_id } = request;

        console.log(user_id);

        const createTagsService = new CreateComplimentsServices();

        const tags = await createTagsService.execute({
            user_sender: user_id,
            user_receiver,
            tag_id,
            message
        });

        return response.json(tags);
    }
}