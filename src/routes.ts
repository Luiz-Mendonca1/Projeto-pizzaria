import { Router} from "express";
import { CreateUserController } from "./controllers/users/CreateUserController";
import { validateSchema } from "./middlewares/validateSchemas";
import { autUserSchema, CreateUserSchema } from "./schemas/userSchema";
import { AuthUserController } from "./controllers/users/AuthUserController";
import { DetailUserController } from "./controllers/users/DetailUserController";
import { isAuthenticated } from "./middlewares/isAuthenticated";
import { CreateCategoryController } from "./controllers/category/CreateCategoryController";
import { isAdmin } from "./middlewares/isAdmin";
import { CreateCategorySchema } from "./schemas/categoryScema";

 const router = Router();

    //  criar user
 router.post("/users", 
    validateSchema(CreateUserSchema), 
    new CreateUserController().handle);

    // login
 router.post('/session', 
    validateSchema(autUserSchema), 
    new AuthUserController().handle);

    // infos do user
 router.post('/me', 
    isAuthenticated, 
    new DetailUserController().handle);

    // criação de categoria
 router.post('/category', 
    isAuthenticated, isAdmin,
    validateSchema(CreateCategorySchema),
    new CreateCategoryController().handle);



 export {router}