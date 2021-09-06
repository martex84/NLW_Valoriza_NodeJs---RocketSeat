import { Router } from "express"

import { CreateUserController } from "./controllers/CreateUserController";
import { CreateTagsController } from "./controllers/CreateTagsController";
import { CreateComplimentsController } from "./controllers/CreateComplimentsController";
import { AutenticateUserController } from "./controllers/AutenticateUserController"
import { ensureAdmin } from "./middlewares/ensureAdmin";
import { ensureAuthenticated } from "./middlewares/ensureAuthenticated"

const router = Router();

const createUserController = new CreateUserController();
const createTagController = new CreateTagsController();
const createComplimentsController = new CreateComplimentsController();
const autenticateUserController = new AutenticateUserController();

router.post("/users", createUserController.handle);
router.post("/tags", ensureAuthenticated, ensureAdmin, createTagController.handle);
router.post("/compliments", ensureAuthenticated, createComplimentsController.handle);
router.post("/autenticate", autenticateUserController.handle);

export { router };
