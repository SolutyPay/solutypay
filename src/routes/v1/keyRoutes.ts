import { Router } from "express";
import { ensureAuthUser } from "../../middlewares/v1/ensureAuthUser";

import { CreateNewKeyController } from "../../controllers/v1/keys/CreateNewKeyController";

const keyRoutes = Router();

const createNewKeyUseCase = new CreateNewKeyController();


keyRoutes.post("/generate", ensureAuthUser, createNewKeyUseCase.handle);


// keyRoutes.get(
//   "/",
//   ensureAuthUser,
//   listUserController.handle
// );

export { keyRoutes };
