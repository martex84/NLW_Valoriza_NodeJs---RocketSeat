import { Router } from "express";

import { CreateUserController } from "./controllers/CreateUserController";
import { CreateTagsController } from "./controllers/CreateTagsController";
import { CreateComplimentsController } from "./controllers/CreateComplimentsController";
import { AutenticateUserController } from "./controllers/AutenticateUserController"
import { ListUserReceiverComplimentsController } from "./controllers/ListUserReceiverComplimentsController";
import { ListUserSendComplimentsController } from "./controllers/ListUserSendComplimentsController";
import { ListTagController } from "./controllers/ListTagController";
import { ListUserController } from "./controllers/ListUserController";

import { ensureAdmin } from "./middlewares/ensureAdmin";
import { ensureAuthenticated } from "./middlewares/ensureAuthenticated"

const router = Router();

const createUserController = new CreateUserController();
const createTagController = new CreateTagsController();
const createComplimentsController = new CreateComplimentsController();
const autenticateUserController = new AutenticateUserController();
const listUserReceiverComplimentsController = new ListUserReceiverComplimentsController();
const listUserSendComplimentsController = new ListUserSendComplimentsController();
const listTagController = new ListTagController();
const listUserController = new ListUserController();

router.post("/users", createUserController.handle);
router.post("/tags", ensureAuthenticated, ensureAdmin, createTagController.handle);
router.post("/compliments", ensureAuthenticated, createComplimentsController.handle);
router.post("/autenticate", autenticateUserController.handle);

router.get("/users/compliments/receiver", ensureAuthenticated, listUserReceiverComplimentsController.handle);
router.get("/users/compliments/send", ensureAuthenticated, listUserSendComplimentsController.handle);
router.get("/tags", ensureAuthenticated, listTagController.handle);
router.get("/users", ensureAuthenticated, listUserController.handle);

export { router };
