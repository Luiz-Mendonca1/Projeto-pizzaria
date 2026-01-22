import { Router} from "express";
import { CreateUserController } from "./controllers/users/CreateUserControler";
import { validateSchema } from "./middlewares/validateSchemas";
import { CreateUserSchema } from "./schemas/userSchema";

 const router = Router();

 router.post("/users", validateSchema(CreateUserSchema), new CreateUserController().handle);

 export {router}