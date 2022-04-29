import { Router } from "express";
import { userRoutes } from "./userRoutes";
import { keyRoutes } from "./keyRoutes";
import { batchRoutes } from "./batchRoutes";
import { batchItensRoutes } from "./batchItensRoutes";

const routes = Router();

routes.use("/users", userRoutes);
routes.use("/keys", keyRoutes);
routes.use("/batchs", batchRoutes);
routes.use("/batchsitens", batchItensRoutes);

export { routes };
