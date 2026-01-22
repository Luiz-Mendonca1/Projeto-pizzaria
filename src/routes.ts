import { Router} from "express";
import { CreateUserController } from "./controllers/users/CreateUserControler";

 const router = Router();

 router.post("/users", new CreateUserController().handle);

 export {router}