import { Router} from "express";
import { CreateUserController } from "./controllers/users/CreateUserController";
import { validateSchema } from "./middlewares/validateSchemas";
import { autUserSchema, CreateUserSchema } from "./schemas/userSchema";
import { AuthUserController } from "./controllers/users/AuthUserController";
import { DetailUserController } from "./controllers/users/DetailUserController";
import { isAuthenticated } from "./middlewares/isAuthenticated";
import { CreateCategoryController } from "./controllers/category/CreateCategoryController";

 const router = Router();

 router.post("/users", validateSchema(CreateUserSchema), new CreateUserController().handle);
 router.post('/session', validateSchema(autUserSchema), new AuthUserController().handle);
 router.post('/me', isAuthenticated, new DetailUserController().handle);
router.post('/category', isAuthenticated, new CreateCategoryController().handle);

 export {router}