import { Request, Response } from "express";
import { RemoveUserUseCase } from "../../../use-cases/v1/user";

export class RemoveUserController {
  async handle(request: Request, response: Response) {
    const { id } = request.params;

    const removeUserUseCase = new RemoveUserUseCase();
    const user = await removeUserUseCase.execute({
      id,
      active: false,
    });

    return response.json(user);
  }
}
