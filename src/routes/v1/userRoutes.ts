import { Router } from "express";
import { AuthUserController } from "../../controllers/v1/auth";
import {
  CreateNewPasswordController,
  CreateUserController,
  RemoveUserController,
  ResetDefaultPasswordController,
  UpdateUserController,
} from "../../controllers/v1/user";
import { ListUserController } from "../../controllers/v1/user/ListUserController";
import { ListUserProrfileController } from "../../controllers/v1/user/ListUserProrfileController";
import { ensureAuthUser } from "../../middlewares/v1/ensureAuthUser";

const userRoutes = Router();

const createUserController = new CreateUserController();
const authUserController = new AuthUserController();

const updateUserController = new UpdateUserController();
const removeUserController = new RemoveUserController();
const resetDefaultPasswordController = new ResetDefaultPasswordController();
const createNewPasswordController = new CreateNewPasswordController();
const listUserController = new ListUserController();
const listUserProrfileController = new ListUserProrfileController();

userRoutes.post("/signup", createUserController.handle);
userRoutes.post("/signin", authUserController.handle);

userRoutes.get(
  "/",
  ensureAuthUser,
  listUserController.handle
);

userRoutes.get(
  "/profile/:profile",
  ensureAuthUser,
  listUserProrfileController.handle
);


userRoutes.put("/update/:id", ensureAuthUser, updateUserController.handle);
userRoutes.put("/remove/:id", ensureAuthUser, removeUserController.handle);
userRoutes.put(
  "/password/reset/:id",
  ensureAuthUser,
  resetDefaultPasswordController.handle
);
userRoutes.put(
  "/password/new",
  ensureAuthUser,
  createNewPasswordController.handle
);

export { userRoutes };
