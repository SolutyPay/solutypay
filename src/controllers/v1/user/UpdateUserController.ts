import { Request, Response } from "express";
import { UpdateUserUseCase } from "../../../use-cases/v1/user";

export class UpdateUserController {
  async handle(request: Request, response: Response) {

    const { id } = request.params;
    const { name, email, profile } = request.body;

    const updateUserUseCase = new UpdateUserUseCase();

    const user = await updateUserUseCase.execute({
      id,
      name,
      email,
      profile,
    });

    return response.json(user);
  }
}
