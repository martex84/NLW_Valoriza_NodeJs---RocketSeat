import { Request, Response } from "express";

import { ListUserReceiverComplimentsService } from "../services/ListUserReceiverComplimentsService";


export class ListUserReceiverComplimentsController {
    async handle(request: Request, response: Response) {
        const { user_id } = request;

        const listUserReceiverCOmplimentService = new ListUserReceiverComplimentsService();

        const compliments = await listUserReceiverCOmplimentService.execute(user_id);

        return response.json(compliments);
    }
}