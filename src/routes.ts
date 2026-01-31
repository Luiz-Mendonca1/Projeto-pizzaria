import { Router} from "express";
import { CreateUserController } from "./controllers/users/CreateUserController";
import { validateSchema } from "./middlewares/validateSchemas";
import { autUserSchema, CreateUserSchema } from "./schemas/userSchema";
import { AuthUserController } from "./controllers/users/AuthUserController";

 const router = Router();

 router.post("/users", validateSchema(CreateUserSchema), new CreateUserController().handle);
 router.post('/session', validateSchema(autUserSchema), new AuthUserController().handle);

 export {router}