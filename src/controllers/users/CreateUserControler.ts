import { Request, Response } from "express";
import { CreateUserService } from "../../services/user/CreateUserService";

class CreateUserController {
    async handle(req: Request, res: Response) {

        const createUserService = new CreateUserService();

        const user = await createUserService.execute();

        res.json({ message: "Funcionando" });
    }
}

export { CreateUserController };