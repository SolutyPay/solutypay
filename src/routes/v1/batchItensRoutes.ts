import { Router } from "express";
import { ensureToken } from "../../middlewares/v1/ensureToken";

import { CreateNewBatchItensController } from "../../controllers/v1/batch/CreateNewBatchItensController";

const batchItensRoutes = Router();

const createNewBatchItensController = new CreateNewBatchItensController();

batchItensRoutes.post("/create", ensureToken, createNewBatchItensController.handle);

export { batchItensRoutes };
