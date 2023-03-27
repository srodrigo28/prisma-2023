import { Response, Request } from "express";
import { database } from "../../database";

export class DeleteLoginController{
    async handle(req: Request, res: Response) {
        const { id } = req.params;

        const login = await database.login.delete({
            where: {
                id: Number(id)
            }
        })
        return res.json("Login :: Deletado com sucesso")
    }
}