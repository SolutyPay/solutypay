import { Request, Response } from "express";
import { CreateNewBatchUseCase } from "../../../use-cases/v1/batch";

export class CreateNewBatchController {
  async handle(request: Request, response: Response) {
    const { id_user_key } = request;
    const { name, start } = request.body;

    const createNewBatchUseCase = new CreateNewBatchUseCase();
    const result = await createNewBatchUseCase.execute({
      userId: id_user_key,
      name: name,
      start: start
    });

    response.json(result);
  }
}
