import { Response, Request } from "express";
import { database } from "../../database";

export class FindLoginController{
    async handle(req: Request, res: Response) {
        const { id } = req.params;

        const login = await database.login.findUnique({
            where: {
                id: Number(id)
            }
        })
        return res.json(login)
    }
}