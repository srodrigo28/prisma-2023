import { Response, Request } from "express";
import { database } from "../../database";

export class CreateLoginController{
    async handle(req: Request, res: Response) {
        const { email, name, senha } = req.body;

        const login = await database.login.create({
            data:{
                email, name, senha
            }
        })
        
        return res.json(login)
    }
}