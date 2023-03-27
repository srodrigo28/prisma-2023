import { Response, Request } from "express";
import { database } from "../../database";

export class FindAllLoginController{
    async handle(req: Request, res: Response) {

        const login = await database.login.findMany()
        
        return res.json(login)
    }
}