import { Router } from "express";
import { ensureToken } from "../../middlewares/v1/ensureToken";

import { CreateNewBatchController } from "../../controllers/v1/batch/CreateNewBatchController";

const batchRoutes = Router();

const createNewBatchController = new CreateNewBatchController();

batchRoutes.post("/create", ensureToken, createNewBatchController.handle);

export { batchRoutes };
