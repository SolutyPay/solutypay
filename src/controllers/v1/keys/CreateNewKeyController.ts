import { Request, Response } from "express";
import { CreateNewKeyUseCase } from "../../../use-cases/v1/keys";

export class CreateNewKeyController {
  async handle(request: Request, response: Response) {
    const { id_user } = request;
console.log(id_user)
    const createNewKeyUseCase = new CreateNewKeyUseCase();
    const result = await createNewKeyUseCase.execute({
      userId: id_user,
    });

    response.json(result);
  }
}
