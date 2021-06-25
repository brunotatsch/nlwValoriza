import { Router } from "express";
import { AuthenticateUserController } from "./controllers/AuthenticateUserController";
import { CreateComplimentController } from "./controllers/CreateComplimentController";
import { CreateTagController } from "./controllers/CreateTagController";
import { CreateUserController } from "./controllers/CreateUserController";
import { ListTagsController } from "./controllers/ListTagsController";
import { ListUserReceiveComplementsController } from "./controllers/ListUserReceiveComplementsController";
import { ListUserSendComplementsController } from "./controllers/ListUserSenderComplementsController";
import { ensureAdmin } from "./middlewares/ensureAdmin";
import { ensureAuthenticated } from "./middlewares/ensureAuthenticated";
import { ListUsersController } from './controllers/ListUsersController'

const router = Router();
const createUserController = new CreateUserController();
const createTagController = new CreateTagController();
const authenticateUserController = new AuthenticateUserController();
const createComplimentRepository = new CreateComplimentController();
const listUserReceiveComplementsController = new ListUserReceiveComplementsController();
const listUserSendComplementsController = new ListUserSendComplementsController();
const listTagsController = new ListTagsController();
const listUsersController = new ListUsersController();

router.post("/login", authenticateUserController.handle);

router.post("/users", ensureAuthenticated, createUserController.handle);
router.get("/users", ensureAuthenticated, listUsersController.handle);
router.get("/users/compliment/receive", ensureAuthenticated, listUserReceiveComplementsController.handle);
router.get("/users/compliment/send", ensureAuthenticated, listUserSendComplementsController.handle);

router.post("/compliments", ensureAuthenticated, createComplimentRepository.handle);
router.post("/tags", ensureAuthenticated, ensureAdmin, createTagController.handle);
router.get("/tags", ensureAuthenticated, listTagsController.handle);

export { router };